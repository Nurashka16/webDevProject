class Observer {
    update(data) {
        throw new Error('Метод update должен быть реализован');
    }
}

class GameModel {
    constructor() {
        this.observers = [];
        this.rounds = [];
        this.player1Wins = 0;
        this.player2Wins = 0;
        this.player1Choices = { rock: 0, scissors: 0, paper: 0 };
        this.player2Choices = { rock: 0, scissors: 0, paper: 0 };
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.getState()));
    }

    getState() {
        return {
            rounds: [...this.rounds],
            player1Wins: this.player1Wins,
            player2Wins: this.player2Wins,
            player1Choices: { ...this.player1Choices },
            player2Choices: { ...this.player2Choices }
        };
    }

    addRound(roundData) {
        const result = this.determineWinner(roundData.player1, roundData.player2);
        this.updateChoiceStats(roundData.player1, roundData.player2);

        this.rounds.unshift({
            player1: roundData.player1,
            player2: roundData.player2,
            result: result,
            timestamp: new Date().toLocaleTimeString()
        });

        if (result === 'player1') this.player1Wins++;
        if (result === 'player2') this.player2Wins++;

        this.notifyObservers();
    }

    determineWinner(choice1, choice2) {
        if (choice1 === choice2) return 'draw';

        const wins = {
            'Камень': 'Ножницы',
            'Ножницы': 'Бумага',
            'Бумага': 'Камень'
        };

        return wins[choice1] === choice2 ? 'player1' : 'player2';
    }

    updateChoiceStats(choice1, choice2) {
        this.updatePlayerChoice(this.player1Choices, choice1);
        this.updatePlayerChoice(this.player2Choices, choice2);
    }

    updatePlayerChoice(stats, choice) {
        switch (choice) {
            case 'Камень': stats.rock++; break;
            case 'Ножницы': stats.scissors++; break;
            case 'Бумага': stats.paper++; break;
        }
    }

    clear() {
        this.rounds = [];
        this.player1Wins = 0;
        this.player2Wins = 0;
        this.player1Choices = { rock: 0, scissors: 0, paper: 0 };
        this.player2Choices = { rock: 0, scissors: 0, paper: 0 };
        this.notifyObservers();
    }
}

// === КОНКРЕТНЫЕ НАБЛЮДАТЕЛИ ===
class ScoreObserver extends Observer {
    constructor(container) {
        super();
        this.container = container;
        this.player1WinsEl = container.querySelector('#player1Wins');
        this.player2WinsEl = container.querySelector('#player2Wins');
    }

    update(state) {
        if (this.player1WinsEl) this.player1WinsEl.textContent = state.player1Wins;
        if (this.player2WinsEl) this.player2WinsEl.textContent = state.player2Wins;
    }
}

class RoundHistoryObserver extends Observer {
    constructor(container) {
        super();
        this.container = container;
        this.roundsContainer = container.querySelector('#roundsContainer');
        this.currentRoundCount = 0; // ← ИНИЦИАЛИЗАЦИЯ
    }

    update(state) {
        if (!this.roundsContainer) return;

        if (state.rounds.length === 0) {
            this.roundsContainer.innerHTML = '<div class="no-rounds">Раунды еще не начались</div>';
            return;
        }

        if (state.rounds.length > this.currentRoundCount) {
            const newRound = state.rounds[0];
            const roundElement = this.createRoundElement(newRound);
            this.roundsContainer.insertBefore(roundElement, this.roundsContainer.firstChild);

            if (state.rounds.length > 50) {
                const lastRound = this.roundsContainer.lastChild;
                if (lastRound) this.roundsContainer.removeChild(lastRound);
            }
        }

        this.currentRoundCount = state.rounds.length;
    }

    createRoundElement(round) {
        const element = document.createElement('div');

        // ← ИСПРАВЛЕНИЕ: player1 → winner1, player2 → winner2
        const cssClass = round.result === 'player1' ? 'winner1' :
            round.result === 'player2' ? 'winner2' : 'draw';
        element.className = `round-item ${cssClass}`;

        let resultText = '';
        if (round.result === 'player1') resultText = 'Победил Игрок 1';
        else if (round.result === 'player2') resultText = 'Победил Игрок 2';
        else resultText = 'Ничья';

        element.innerHTML = ` 
            <span>[${round.timestamp}] ${round.player1} vs ${round.player2}</span> 
            <span class="result">${resultText}</span> 
        `;

        return element;
    }
}

class StatisticsObserver extends Observer {
    constructor(container) {
        super();
        this.container = container;
        this.statsElements = {
            player1: {
                rock: { count: container.querySelector('#player1Rock'), percent: container.querySelector('#player1RockPercent') },
                scissors: { count: container.querySelector('#player1Scissors'), percent: container.querySelector('#player1ScissorsPercent') },
                paper: { count: container.querySelector('#player1Paper'), percent: container.querySelector('#player1PaperPercent') }
            },
            player2: {
                rock: { count: container.querySelector('#player2Rock'), percent: container.querySelector('#player2RockPercent') },
                scissors: { count: container.querySelector('#player2Scissors'), percent: container.querySelector('#player2ScissorsPercent') },
                paper: { count: container.querySelector('#player2Paper'), percent: container.querySelector('#player2PaperPercent') }
            }
        };
    }

    update(state) {
        this.updatePlayerStats('player1', state.player1Choices);
        this.updatePlayerStats('player2', state.player2Choices);
    }

    updatePlayerStats(player, choices) {
        const total = choices.rock + choices.scissors + choices.paper;
        if (total === 0) return;

        const elements = this.statsElements[player];
        this.updateChoiceStat(elements.rock, choices.rock, total);
        this.updateChoiceStat(elements.scissors, choices.scissors, total);
        this.updateChoiceStat(elements.paper, choices.paper, total);
    }

    updateChoiceStat(element, count, total) {
        if (!element.count || !element.percent) return;
        element.count.textContent = count;
        const percent = ((count / total) * 100).toFixed(1);
        element.percent.textContent = `${percent}%`;
    }
}

// === СЕРВИС SSE ===
class GameService {
    constructor(model) {
        this.model = model;
        this.eventSource = null;
        this.isConnected = false;
    }

    connect() {
        if (this.isConnected) return;

        try {
            this.eventSource = new EventSource('http://95.163.242.125:80/rps/stream');
            this.isConnected = true;

            this.eventSource.addEventListener('round', (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.model.addRound(data);
                } catch (error) {
                    console.error('Ошибка обработки данных раунда:', error);
                }
            });

            this.eventSource.addEventListener('error', (error) => {
                console.error('Ошибка SSE соединения:', error);
                this.disconnect();
            });
        } catch (error) {
            console.error('Ошибка создания SSE соединения:', error);
            this.isConnected = false;
            throw error;
        }
    }

    disconnect() {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
        this.isConnected = false;
        this.model.clear();
    }
}

// === ИНИЦИАЛИЗАЦИЯ ЗАДАЧИ 4 ===
document.addEventListener('DOMContentLoaded', () => {
    const task4Container = document.getElementById('task4-container');
    if (!task4Container) return;

    const startBtn = task4Container.querySelector('#startBtn');
    const stopBtn = task4Container.querySelector('#stopBtn');
    const connectionStatus = task4Container.querySelector('#connectionStatus');
    const sseError = task4Container.querySelector('#sseError');

    const gameModel = new GameModel();
    const scoreObserver = new ScoreObserver(task4Container);
    const historyObserver = new RoundHistoryObserver(task4Container);
    const statsObserver = new StatisticsObserver(task4Container);

    gameModel.addObserver(scoreObserver);
    gameModel.addObserver(historyObserver);
    gameModel.addObserver(statsObserver);

    const gameService = new GameService(gameModel);

    function updateConnectionStatus(isConnected) {
        if (!connectionStatus) return;
        connectionStatus.textContent = isConnected ? 'Подключено' : 'Не подключено';
        connectionStatus.className = `status-indicator ${isConnected ? 'connected' : 'disconnected'}`;
    }

    startBtn?.addEventListener('click', () => {
        sseError.hidden = true;
        try {
            gameService.connect();
            updateConnectionStatus(true);
            startBtn.disabled = true;
            stopBtn.disabled = false;
        } catch (error) {
            sseError.textContent = `Ошибка подключения: ${error.message || 'Не удалось установить соединение'}`;
            sseError.hidden = false;
            updateConnectionStatus(false);
        }
    });

    stopBtn?.addEventListener('click', () => {
        gameService.disconnect();
        updateConnectionStatus(false);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    updateConnectionStatus(false);

    window.addEventListener('beforeunload', () => {
        if (gameService.isConnected) {
            gameService.disconnect();
        }
    });
});
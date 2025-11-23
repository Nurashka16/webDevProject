const itemsDatabase = {
    tree: {
        name: "Дерево",
        icon: "🌳",
        craftingTime: 0,
        requiredItems: [],
        failProbability: 0
    },
    ironOre: {
        name: "Железная руда",
        icon: "⬛",
        craftingTime: 0,
        requiredItems: [],
        failProbability: 0
    },
    stick: {
        name: "Палка",
        icon: "📏",
        craftingTime: 800,
        requiredItems: ["tree"],
        failProbability: 0.05
    },
    ironIngot: {
        name: "Железный слиток",
        icon: "🔩",
        craftingTime: 2000,
        requiredItems: ["ironOre"],
        failProbability: 0.15
    },
    pickaxe: {
        name: "Кирка",
        icon: "⛏️",
        craftingTime: 2500,
        requiredItems: ["stick", "ironIngot"],
        failProbability: 0.1
    }
};

// Инвентарь
let inventory = {
    tree: 2,
    ironOre: 1,
    stick: 0,
    ironIngot: 0,
    pickaxe: 0
};

// Система крафта
class CraftingSystem {
    constructor() {
        this.isCrafting = false;
        this.currentlyCrafting = new Set();
        this.initEventListeners();
        this.updateInventoryDisplay();
        this.addToLog('🚀 Система крафта готова к работе!');
        this.updateResultDisplay('Нажмите на кнопку, чтобы начать создание');
    }

    initEventListeners() {
        document.querySelectorAll('.craft-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.dataset.item;
                this.startCrafting(itemId);
            });
        });
    }

    async startCrafting(itemId) {
        if (this.isCrafting || this.currentlyCrafting.has(itemId)) {
            this.updateResultDisplay('⚠️ Система занята созданием предметов!');
            return;
        }

        this.isCrafting = true;
        this.currentlyCrafting.add(itemId);
        this.updateButtonState(itemId, true);
        this.updateResultDisplay(`🔄 Начинаем создание: ${itemsDatabase[itemId].name}...`);

        try {
            await this.craftItem(itemId);
            this.updateResultDisplay(`✅ ${itemsDatabase[itemId].name} успешно создан!`);
        } catch (error) {
            this.updateResultDisplay(`❌ Ошибка: ${error.message}`);
            this.addToLog(`❌ Ошибка создания: ${error.message}`);
        } finally {
            this.isCrafting = false;
            this.currentlyCrafting.delete(itemId);
            this.updateButtonState(itemId, false);
        }
    }

    async craftItem(itemId) {
        const item = itemsDatabase[itemId];
        if (!item) {
            throw new Error(`Предмет ${itemId} не найден`);
        }

        this.addToLog(`🔄 Начинаем создание: ${item.name}...`);

        for (const requiredItemId of item.requiredItems) {
            if (!inventory[requiredItemId] || inventory[requiredItemId] <= 0) {
                await this.craftItem(requiredItemId);
            }
        }

        for (const requiredItemId of item.requiredItems) {
            inventory[requiredItemId]--;
            this.addToLog(`➖ Использован ${itemsDatabase[requiredItemId].name}`);
        }

        if (item.craftingTime > 0) {
            this.addToLog(`⏳ Создание ${item.name}... (${item.craftingTime}ms)`);
            await new Promise(resolve => setTimeout(resolve, item.craftingTime));

            if (Math.random() < item.failProbability) {
                this.addToLog(`❌ Неудача! ${item.name} не создан`);
                for (const requiredItemId of item.requiredItems) {
                    inventory[requiredItemId]++;
                }
                this.updateInventoryDisplay();
                throw new Error(`Создание ${item.name} завершилось неудачей`);
            }
        }

        inventory[itemId] = (inventory[itemId] || 0) + 1;
        this.addToLog(`✅ Успех! ${item.name} создан и добавлен в инвентарь`);
        this.updateInventoryDisplay();
    }

    updateButtonState(itemId, isCrafting) {
        const button = document.querySelector(`[data-item="${itemId}"]`);
        if (button) {
            button.disabled = isCrafting;
            button.classList.toggle('crafting', isCrafting);
            button.textContent = isCrafting
                ? `Создание ${itemsDatabase[itemId].name}...`
                : `Создать ${itemsDatabase[itemId].name}`;
        }
    }

    addToLog(message) {
        const log = document.getElementById('craftingLog');
        if (log) {
            const statusElement = document.createElement('div');
            statusElement.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
            log.appendChild(statusElement);
            log.scrollTop = log.scrollHeight;
        }
    }

    updateResultDisplay(message) {
        const result = document.getElementById('craftResult');
        if (result) result.textContent = message;
    }

    updateInventoryDisplay() {
        const display = document.getElementById('inventoryDisplay');
        if (!display) return;

        display.innerHTML = '';
        Object.entries(inventory).forEach(([itemId, count]) => {
            if (count > 0) {
                const item = itemsDatabase[itemId];
                const el = document.createElement('div');
                el.innerHTML = `${item.icon} ${item.name}: <span class="item-count">${count}</span>`;
                display.appendChild(el);
            }
        });

        if (display.children.length === 0) {
            display.innerHTML = '<div>Инвентарь пуст</div>';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CraftingSystem();
});
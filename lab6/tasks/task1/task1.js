class VersionManager {
    constructor(initialVersion = '0.0.1') {
        const versionStr = !initialVersion || initialVersion.trim() === ''
            ? '0.0.1'
            : initialVersion.trim();
        this._validateVersionFormat(versionStr);

        const [majorStr, minorStr, patchStr] = versionStr.split('.');
        this._major = parseInt(majorStr, 10);
        this._minor = parseInt(minorStr, 10);
        this._patch = parseInt(patchStr, 10);

        this._history = [];
        this._saveState();
    }

    _validateVersionFormat(versionStr) {
        const parts = versionStr.split('.');
        if (parts.length !== 3) {
            throw new Error('Некорректный формат версии!');
        }

        for (const part of parts) {
            if (part === '') throw new Error('Некорректный формат версии!');
            if (!/^\d+$/.test(part)) throw new Error('Некорректный формат версии!');
            if (part.startsWith('0') && part.length > 1) throw new Error('Некорректный формат версии!');

            const num = parseInt(part, 10);
            if (isNaN(num) || num < 0 || num > 99999) throw new Error('Некорректный формат версии!');
        }
    }

    _saveState() {
        this._history.push({ major: this._major, minor: this._minor, patch: this._patch });
        return this;
    }

    major() {
        this._saveState();
        this._major += 1;
        this._minor = 0;
        this._patch = 0;
        return this;
    }

    minor() {
        this._saveState();
        this._minor += 1;
        this._patch = 0;
        return this;
    }

    patch() {
        this._saveState();
        this._patch += 1;
        return this;
    }

    rollback() {
        if (this._history.length <= 1) throw new Error('Невозможно выполнить откат!');
        this._history.pop();
        const prevState = this._history[this._history.length - 1];
        this._major = prevState.major;
        this._minor = prevState.minor;
        this._patch = prevState.patch;
        return this;
    }

    release() {
        return `${this._major}.${this._minor}.${this._patch}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const task1Container = document.getElementById('task1-container');
    if (!task1Container) return;

    const initialVersionInput = task1Container.querySelector('#initialVersion');
    const createVersionBtn = task1Container.querySelector('#createVersionBtn');
    const versionControl = task1Container.querySelector('#versionControl');
    const currentVersionEl = task1Container.querySelector('#currentVersion');
    const versionErrorEl = task1Container.querySelector('#versionError');
    const rollbackErrorEl = task1Container.querySelector('#rollbackError');

    let versionManager = null;

    createVersionBtn?.addEventListener('click', () => {
        const versionStr = initialVersionInput.value.trim();
        versionErrorEl.hidden = true;
        rollbackErrorEl.hidden = true;

        try {
            versionManager = new VersionManager(versionStr);
            currentVersionEl.textContent = versionManager.release();
            versionControl.hidden = false;
            initialVersionInput.value = '';
        } catch (error) {
            versionErrorEl.textContent = error.message;
            versionErrorEl.hidden = false;
        }
    });

    task1Container.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (!versionManager) return;

            const action = button.dataset.action;
            rollbackErrorEl.hidden = true;

            try {
                switch (action) {
                    case 'major': versionManager.major(); break;
                    case 'minor': versionManager.minor(); break;
                    case 'patch': versionManager.patch(); break;
                    case 'rollback': versionManager.rollback(); break;
                }
                currentVersionEl.textContent = versionManager.release();
            } catch (error) {
                rollbackErrorEl.textContent = error.message;
                rollbackErrorEl.hidden = false;
            }
        });
    });
});
function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("работа сделана");
        }, 2000);
    });
}

function executeJob() {
    const resultElement = document.getElementById('jobResult');
    resultElement.textContent = "Выполняется...";
    job()
        .then(result => {
            resultElement.textContent = result;
        })
        .catch(err => {
            resultElement.textContent = "Ошибка: " + err.message;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('jobBtn');
    if (btn) {
        btn.addEventListener('click', executeJob);
    }
});
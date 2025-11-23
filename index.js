function toggleFunctionCode(codeId, buttonId) {
    const codeElement = document.getElementById(codeId);
    const button = document.getElementById(buttonId);

    if (codeElement.style.display === 'none' || !codeElement.style.display) {
        codeElement.style.display = 'block';
        button.textContent = 'Скрыть код';
    } else {
        codeElement.style.display = 'none';
        button.textContent = 'Показать код';
    }
}
function showCoords(e) {
    const x = e.clientX;
    const y = e.clientY;
    const target = e.target.tagName.toLowerCase();
    const output = document.getElementById('coordsOutput');
    
    if (output) {
        output.textContent = `X: ${x}, Y: ${y} - ${target}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', showCoords);
    
    const output = document.getElementById('coordsOutput');
    if (output) {
        output.textContent = 'Нажмите в любом месте страницы';
    }
});
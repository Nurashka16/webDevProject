class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

function validateDimensions(widthInput, heightInput) {
    const widthStr = widthInput.value.trim();
    const heightStr = heightInput.value.trim();

    if (!widthStr || !heightStr) throw new Error('Заполните оба поля');

    const width = parseFloat(widthStr);
    const height = parseFloat(heightStr);

    if (isNaN(width) || isNaN(height)) throw new Error('Введите числовые значения');
    if (width <= 0 || height <= 0) throw new Error('Значения должны быть положительными');

    return { width, height };
}

function createShape(width, height) {
    return Math.abs(width - height) < 0.0001 ? new Square(width) : new Rectangle(width, height);
}

function calculateAndDisplay(calculateMethod, container) {
    const widthInput = container.querySelector('#width');
    const heightInput = container.querySelector('#height');
    const shapeErrorEl = container.querySelector('#shapeError');
    const shapeResult = container.querySelector('#shapeResult');
    const shapeTypeEl = container.querySelector('#shapeType');
    const calculationResultEl = container.querySelector('#calculationResult');

    shapeErrorEl.hidden = true;
    shapeResult.hidden = true;

    try {
        const { width, height } = validateDimensions(widthInput, heightInput);
        const shape = createShape(width, height);

        const result = (calculateMethod === 'area'
            ? shape.area()
            : shape.perimeter()
        ).toFixed(2);

        shapeTypeEl.textContent = shape instanceof Square ? 'Квадрат' : 'Прямоугольник';
        calculationResultEl.textContent = result;
        shapeResult.hidden = false;
    } catch (error) {
        shapeErrorEl.textContent = error.message;
        shapeErrorEl.hidden = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const task2Container = document.getElementById('task2-container');
    if (!task2Container) return;

    const calculateAreaBtn = task2Container.querySelector('#calculateAreaBtn');
    const calculatePerimeterBtn = task2Container.querySelector('#calculatePerimeterBtn');

    calculateAreaBtn?.addEventListener('click', () =>
        calculateAndDisplay('area', task2Container)
    );

    calculatePerimeterBtn?.addEventListener('click', () =>
        calculateAndDisplay('perimeter', task2Container)
    );
});
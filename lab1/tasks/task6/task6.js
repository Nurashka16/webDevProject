function countSandwiches(ingredients) {
    const { bread, cheese } = ingredients;
    const maxFromBread = Math.floor(bread / 2);
    return Math.min(maxFromBread, cheese);
}

function updateSandwichResult() {
    const bread = parseInt(document.getElementById('bread').value, 10);
    const cheese = parseInt(document.getElementById('cheese').value, 10);
    const output = document.getElementById('sandwichResult');

    if (isNaN(bread) || isNaN(cheese) || bread < 0 || cheese < 0) {
        output.textContent = 'Введите неотрицательные числа';
        return;
    }

    const ingredients = { bread, cheese };
    const result = countSandwiches(ingredients);

    output.textContent = result;
    console.log(`countSandwiches({bread: ${bread}, cheese: ${cheese}}) → ${result}`);
}
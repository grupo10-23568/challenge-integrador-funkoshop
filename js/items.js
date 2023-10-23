const add = document.querySelector("#add");
const substract = document.querySelector("#substract");
const quantity = document.querySelector("#quantity");

add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);

substract.addEventListener('click', () => {
    const currentQuantity = Number(quantity.value); // Obtén el valor actual del input
    if (currentQuantity > 0) {
        quantity.value = currentQuantity - 1;
    } else {
        quantity.value = 0;
    }
});




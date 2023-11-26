
document.addEventListener('DOMContentLoaded', () => {
    // Agregar o quitar productos en el carrito Opc 1
    const addOne = document.querySelector("#addOne");
    const substractOne = document.querySelector("#substractOne");
    const quantityOne = document.querySelector("#quantityOne");

    addOne.addEventListener('click', () => quantityOne.value = Number(quantityOne.value) + 1);

    substractOne.addEventListener('click', () => {
        const currentQuantityOne = Number(quantityOne.value);
        if (currentQuantityOne > 0) {
            quantityOne.value = currentQuantityOne - 1;
        } else {
            quantityOne.value = 0;
        }
    });
});
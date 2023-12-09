document.addEventListener('DOMContentLoaded', function () {
    // Agregar o quitar productos en el carrito Opc 1
    const addOne = document.querySelector("#addOne");
    const substractOne = document.querySelector("#substractOne");
    const quantityOne = document.querySelector("#quantityOne");

    addOne.addEventListener('click', () => quantityOne.value = Number(quantityOne.value) + 1);

    substractOne.addEventListener('click', () => {
        const currentQuantityOne = Number(quantityOne.value);
        if (currentQuantityOne > 1) {
            quantityOne.value = currentQuantityOne - 1;
        } else {
            quantityOne.value = 1;
        }
    });
});

function updateQuantity(productId, action, cart) {
    // Obtener la nueva cantidad después de la acción del usuario
    const quantityInput = document.getElementById('quantityOne' + productId);
    const newQuantity = parseInt(quantityInput.value);

    // Enviar la solicitud al servidor para actualizar la cantidad
    fetch(`/cart/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
    })
        .then(response => {
            if (response.ok) {
                // Si la actualización en el servidor fue exitosa, recargar la página
                location.reload();
            } else {
                console.error('Error al actualizar la cantidad del producto.');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud fetch:', error);
        });
}

function deleteItem(productId) {
    console.log('Deleting product with ID:', productId);
    fetch(`/shop/cart/${productId}/delete`, {
        method: 'DELETE',
        credentials: 'same-origin',  // Esto es importante para manejar cookies correctamente
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                // Actualizar la interfaz después de la eliminación exitosa
                console.log('Producto eliminado exitosamente.');
                location.reload();
            } else {
                console.error('Error al eliminar el producto del carrito.');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud fetch:', error);
        });
}

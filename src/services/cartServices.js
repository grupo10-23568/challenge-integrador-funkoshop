class CartService {
    static addToCart(cart, item, files, quantity = 1) {
        cart = cart || [];
        const existingItemIndex = cart.findIndex(cartItem => cartItem.product_id === item.product_id);

        if (existingItemIndex !== -1) {
            // Si el artículo ya está en el carrito, actualiza la cantidad
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Si no está en el carrito, se agrega la cantidad solicitada
            cart.push({
                product_id: item.product_id,
                image_front: item.image_front,
                product_name: item.product_name,
                licence_name: item.licence_name,
                price: item.price,
                quantity: quantity,
                total: item.price * quantity
            });
        }

        // Retorna el carrito actualizado
        return cart;
    }
}

module.exports = CartService;

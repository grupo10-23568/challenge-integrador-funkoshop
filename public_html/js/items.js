// Filtramos items por fecha lanzamiento
document.addEventListener('DOMContentLoaded', () => {
    // Traemos todos los items de la tienda '.shop__item'
    const shopItems = document.querySelectorAll('.shop__item');
    const sliderItems = document.querySelectorAll('.slider__item');

    // Verificamos si un producto es nuevo
    const esNuevo = (fechaCreacion) => {
        const mesEnMilisegundos = 30 * 24 * 60 * 60 * 1000; // 30 días

        // Calculamos la fecha actual menos un mes
        const haceUnMes = new Date() - mesEnMilisegundos;

        // Comparamos la fecha de creación con la fecha actual menos un mes
        return new Date(fechaCreacion) > haceUnMes;
    };

    // Mostramos u ocultarmos la etiqueta 'nuevo'
    const mostrarEtiquetaNuevo = (item) => {
        // Obtenemos la fecha de creación del atributo 'data-created-at'
        const fechaCreacion = item.getAttribute('data-created-at');

        // Verificamos si el producto es nuevo
        const nuevo = esNuevo(fechaCreacion);

        // Traemos la etiqueta 'nuevo'
        const etiquetaNuevo = item.querySelector('.card-item__tag');

        // Mostramos u ocultamos la etiqueta 'nuevo' según si el producto tiene -de 30 días o no
        if (nuevo) {
            etiquetaNuevo.style.display = 'block';
        } else {
            etiquetaNuevo.style.display = 'none';
        }
    };

    // Itera sobre cada elemento '.shop__item' y muestra u oculta la etiqueta 'nuevo'
    shopItems.forEach((shopItem) => {
        mostrarEtiquetaNuevo(shopItem);
    });

    // Itera sobre cada elemento '.slider__item' y muestra u oculta la etiqueta 'nuevo'
    sliderItems.forEach((sliderItem) => {
        mostrarEtiquetaNuevo(sliderItem);
    });
});

// Misma funcionalidad para items individuales
document.addEventListener('DOMContentLoaded', () => {
    // Traemos todos los elementos '.card-item'
    const items = document.querySelectorAll('.card-item');

    // Verificamos si un producto es nuevo
    const esNuevo = (fechaCreacion) => {
        const mesEnMilisegundos = 30 * 24 * 60 * 60 * 1000; // 30 días

        // Calculamos la fecha actual menos un mes
        const haceUnMes = new Date() - mesEnMilisegundos;

        // Comparamos la fecha de creación con la fecha actual menos un mes
        return new Date(fechaCreacion) > haceUnMes;
    };

    // Aplicamos la lógica de 'nuevo' a los items
    const aplicarLogicaNuevo = (elementos) => {
        elementos.forEach((item) => {
            // Obtenemos la fecha de creación del atributo 'data-created-at'
            const fechaCreacion = item.getAttribute('data-created-at');

            // Verifica si el producto es nuevo
            const nuevo = esNuevo(fechaCreacion);

            // Traemos la etiqueta 'nuevo'
            const etiquetaNuevo = item.querySelector('.card-item__tag--items');

            // Muestramos u ocultamos la etiqueta 'nuevo' según lo sea o no
            if (nuevo) {
                etiquetaNuevo.style.display = 'block';
            } else {
                etiquetaNuevo.style.display = 'none';
            }
        });
    };

    aplicarLogicaNuevo(items);
});

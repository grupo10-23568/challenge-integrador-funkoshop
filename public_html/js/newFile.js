// Busqueda por nombre o licencia
// document.addEventListener('DOMContentLoaded', () => {
//     const searchForm = document.getElementById('search-form');
//     const searchResults = document.getElementById('search-results');
//     const items = document.querySelectorAll('.shop__item');
//     const searchInput = searchForm.querySelector('input[name="buscar"]');
//     searchInput.addEventListener('input', () => {
//         const searchTerm = searchInput.value.trim().toLowerCase();
//         // Recorre los elementos 'shop__item' y muestra/oculta según el término de búsqueda
//         items.forEach((item) => {
//             const itemName = item.querySelector('.card-item__name').textContent.toLowerCase();
//             const itemLicence = item.querySelector('.card-item__licence').textContent.toLowerCase();
//             if (itemName.includes(searchTerm) || itemLicence.includes(searchTerm)) {
//                 item.style.display = 'block'; // Muestra el elemento
//             } else {
//                 item.style.display = 'none'; // Oculta el elemento que no coincide
//             }
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
    const items = document.querySelectorAll('.shop__item');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    const searchInput = searchForm.querySelector('input[name="buscar"]');
    const minPriceInput = searchForm.querySelector('input[name="precio-min"]');
    const maxPriceInput = searchForm.querySelector('input[name="precio-max"]');

    searchInput.addEventListener('input', updateResults);
    minPriceInput.addEventListener('input', updateResults);
    maxPriceInput.addEventListener('input', updateResults);

    function updateResults() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const minPrice = parseFloat(minPriceInput.value);
        const maxPrice = parseFloat(maxPriceInput.value);

        items.forEach((item) => {
            const itemName = item.querySelector('.card-item__name').textContent.toLowerCase();
            const itemLicence = item.querySelector('.card-item__licence').textContent.toLowerCase();
            const itemPrice = parseFloat(item.querySelector('.card-item__price').textContent.replace('$', ''));

            const matchesSearch = itemName.includes(searchTerm) || itemLicence.includes(searchTerm);
            const matchesPrice = isNaN(minPrice) || isNaN(maxPrice) || (itemPrice >= minPrice && itemPrice <= maxPrice);

            if (matchesSearch && matchesPrice) {
                item.style.display = 'block'; // Muestra el elemento
            } else {
                item.style.display = 'none'; // Oculta el elemento que no coincide
            }
        });
    }
});

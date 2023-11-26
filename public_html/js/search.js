// Busqueda por nombre o licencia
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
    const items = document.querySelectorAll('.shop__item');
    const searchInput = searchForm.querySelector('input[name="buscar"]');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Recorre los elementos 'shop__item' y muestra/oculta según el término de búsqueda
        items.forEach((item) => {
            const itemName = item.querySelector('.card-item__name').textContent.toLowerCase();
            const itemLicence = item.querySelector('.card-item__licence').textContent.toLowerCase();

            if (itemName.includes(searchTerm) || itemLicence.includes(searchTerm)) {
                item.style.display = 'block'; // Muestra el elemento
            } else {
                item.style.display = 'none'; // Oculta el elemento que no coincide
            }
        });
    });
});
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

// Busqueda automatica en Listado de productos
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form__admin');
    const input = document.querySelector('.search__input');
    const tableRows = document.querySelectorAll('.listado_products tbody tr');

    input.addEventListener('input', function () {
        const searchTerm = input.value.toLowerCase();

        tableRows.forEach(function (row) {
            const id = row.querySelector('.id').textContent.toLowerCase();
            const sku = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            const productName = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
            const licence = row.querySelector('td:nth-child(4)').textContent.toLowerCase(); // Asegúrate de que esta línea refleje la posición correcta de la columna "Licencia"
            const category = row.querySelector('td:nth-child(5)').textContent.toLowerCase(); // Asegúrate de que esta línea refleje la posición correcta de la columna "Categoría"

            const match = id.includes(searchTerm) || sku.includes(searchTerm) || productName.includes(searchTerm) || licence.includes(searchTerm) || category.includes(searchTerm);

            if (match) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
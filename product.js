document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');

    filterButton.addEventListener('click', function() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const priceFilter = document.getElementById('priceFilter').value;
        applyFilters(categoryFilter, priceFilter);
    });

    function applyFilters(categoryFilter, priceFilter) {
        const productCards = document.querySelectorAll('.card');
        const resultContainer = document.getElementById('filtered-products-container'); // Use the new filtered container
        resultContainer.innerHTML = ''; // Clear previous results in the filtered section

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseInt(card.getAttribute('data-price'), 10);
            let isMatch = true;

            if (categoryFilter !== 'all' && category !== categoryFilter) {
                isMatch = false;
            }

            if (priceFilter !== 'all') {
                const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
                if (price < minPrice || price > maxPrice) {
                    isMatch = false;
                }
            }

            if (isMatch) {
                const clonedCard = card.cloneNode(true); // Clone to avoid changing the original
                clonedCard.style.display = 'block'; // Ensure visibility
                resultContainer.appendChild(clonedCard); // Append to the filtered section
            }
        });

        // Optional: Display a message if no products match the filter
        if (!resultContainer.hasChildNodes()) {
            const noMatchMessage = document.createElement('p');
            noMatchMessage.textContent = 'No products match your filters.';
            resultContainer.appendChild(noMatchMessage);
        }
    }
});



//Assignment 6
// 2. User Preferences - Light/Dark Mode.
const checkbox = document.getElementById('checkbox');
document.addEventListener('DOMContentLoaded', () => {
    //Check for the saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night-theme');
        checkbox.checked = true;
    } else {
        document.body.classList.remove('night-theme');
        checkbox.checked = false;
    }
});

checkbox.addEventListener('change', () => {
    // Toggle the theme based on the checkbox state and update localStorage
    if (checkbox.checked) {
        document.body.classList.add('night-theme');
        localStorage.setItem('theme', 'night');
    } else {
        document.body.classList.remove('night-theme');
        localStorage.setItem('theme', 'light');
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // Load saved filter settings from local storage
    const savedCategoryFilter = localStorage.getItem('categoryFilter');
    const savedPriceFilter = localStorage.getItem('priceFilter');

    // Apply saved filter settings if they exist
    if (savedCategoryFilter) {
        document.getElementById('categoryFilter').value = savedCategoryFilter;
    }
    if (savedPriceFilter) {
        document.getElementById('priceFilter').value = savedPriceFilter;
    }

    // Apply filters immediately on page load
    applyFilters();

    // Event listener for applying filters
    document.getElementById('filterButton').addEventListener('click', function() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const priceFilter = document.getElementById('priceFilter').value;

        // Save filter settings to local storage
        localStorage.setItem('categoryFilter', categoryFilter);
        localStorage.setItem('priceFilter', priceFilter);

        applyFilters();
    });

    function applyFilters() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const priceFilter = document.getElementById('priceFilter').value;
        const productCards = document.querySelectorAll('.card');

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseInt(card.getAttribute('data-price'));
            let showCard = true;

            if (categoryFilter !== 'all' && category !== categoryFilter) {
                showCard = false;
            }

            if (priceFilter !== 'all') {
                const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
                if (price < minPrice || price > maxPrice) {
                    showCard = false;
                }
            }

            card.style.display = showCard ? 'block' : 'none';
        });
    }
});

// User Authentication: Login and Logout
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutButton = document.getElementById('logoutIcon');
const loginIcon = document.getElementById('loginIcon');
const rememberMeCheckbox = document.getElementById('rememberMe');

document.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
        logoutButton.style.display = 'block';
        loginIcon.style.display = 'none';
    } else {
        logoutButton.style.display = 'none';
        loginIcon.style.display = 'block';
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === '' || password === '') {
        alert('Please enter a username and password.');
        return;
    }

    if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('username');
    }

    loginForm.reset();
    $('#loginModal').modal('hide');
    logoutButton.style.display = 'block';
    loginIcon.style.display = 'none';
});

logoutButton.addEventListener('click', function() {
    localStorage.removeItem('username');
    logoutButton.style.display = 'none';
    loginIcon.style.display = 'block';
});











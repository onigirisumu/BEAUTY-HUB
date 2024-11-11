document.addEventListener('DOMContentLoaded', function() {
    // Load saved filter settings from localStorage
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

        // Save filter settings to localStorage
        localStorage.setItem('categoryFilter', categoryFilter);
        localStorage.setItem('priceFilter', priceFilter);

        applyFilters();
    });

    // Function to apply filters
    function applyFilters() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const priceFilter = document.getElementById('priceFilter').value;
        const productCards = document.querySelectorAll('.card');
        let displayedCount = 0;

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseInt(card.getAttribute('data-price'));
            let showCard = true;

            // Check if product matches category filter
            if (categoryFilter !== 'all' && category !== categoryFilter) {
                showCard = false;
            }

            // Check if product matches price filter
            if (priceFilter !== 'all') {
                const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
                if (price < minPrice || price > maxPrice) {
                    showCard = false;
                }
            }

            // Show card if it matches filters
            if (showCard) {
                card.style.display = 'block'; // Ensure it's displayed
                displayedCount++;
            } else {
                card.style.display = 'none'; // Hide card if it doesn't match filters
            }
        });

        // Show or hide the filtered products section based on the number of products shown
        const filteredSection = document.getElementById('filtered-products-section');
        filteredSection.style.display = displayedCount > 0 ? 'block' : 'none';
    }

    // Reset button functionality
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
        // Reset filter values to 'all'
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('priceFilter').value = 'all';

        // Clear filter settings from localStorage
        localStorage.removeItem('categoryFilter');
        localStorage.removeItem('priceFilter');

        // Show all product sections (novinki, makeup, haircare, etc.)
        document.querySelectorAll('.product-section').forEach(section => {
            section.style.display = 'block'; // Ensure product sections are visible
        });

        // Reset the display of all product cards to visible
        const productCards = document.querySelectorAll('.card');
        productCards.forEach(card => {
            card.style.display = 'block'; // Ensure all product cards are shown
        });

        // Reset category and price filters in localStorage
        localStorage.removeItem('categoryFilter');
        localStorage.removeItem('priceFilter');

        // Hide the filtered products section and clear any previous filtered results
        const filteredProductsContainer = document.getElementById('filtered-products-container');
        filteredProductsContainer.innerHTML = '';  // Clear any previous filtered results
        document.getElementById('filtered-products-section').style.display = 'none'; // Hide filtered section
    });
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











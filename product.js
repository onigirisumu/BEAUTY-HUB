document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeThemeToggle();
    initializeLogin();

    document.getElementById('filterButton').addEventListener('click', function() {
        saveFilters();
        filterProducts();  // Replace applyFilters with filterProducts
    });
});

function initializeFilters() {
    const savedCategoryFilter = localStorage.getItem('categoryFilter');
    const savedPriceFilter = localStorage.getItem('priceFilter');

    if (savedCategoryFilter) document.getElementById('categoryFilter').value = savedCategoryFilter;
    if (savedPriceFilter) document.getElementById('priceFilter').value = savedPriceFilter;

    filterProducts();  // Replace applyFilters with filterProducts
}

function saveFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    localStorage.setItem('categoryFilter', categoryFilter);
    localStorage.setItem('priceFilter', priceFilter);
}

function filterProducts() {  // Replaces applyFilters
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const productCards = document.querySelectorAll('.card');
    const noResultsMessage = document.getElementById('noResultsMessage');
    let visibleCards = 0;

    productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const price = parseInt(card.getAttribute('data-price'));
        
        // Adjust the condition as per your filtering logic
        const matchesFilter = (categoryFilter === 'all' || category === categoryFilter) &&
                              (priceFilter === 'all' || withinPriceRange(price, priceFilter));

        card.style.display = matchesFilter ? 'block' : 'none';
        if (matchesFilter) visibleCards++;
    });

    noResultsMessage.style.display = visibleCards === 0 ? 'block' : 'none';
}

function withinPriceRange(price, priceFilter) {
    const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
    return price >= minPrice && price <= maxPrice;
}

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











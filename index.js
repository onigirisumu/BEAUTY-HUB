// Assignment 4
//date and time
function formatDateTime(date) {
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const formattedDate = date.toLocaleString('en-US', dateOptions);
    const formattedTime = date.toLocaleString('kk-KZ', timeOptions);

    return `${formattedDate}, ${formattedTime}`;
}
function displayDateTime() {
    const now = new Date();
    const formattedDateTime = formatDateTime(now);

    const dateTimeElement = document.getElementById('current-date-time');
    dateTimeElement.textContent = `сurrent date and time in Astana: ${formattedDateTime}`;
}

displayDateTime();
setInterval(displayDateTime, 60000);

//button
const button = document.getElementById('changeColorBtn');
const colors = ['#edf756', '#9df9ef', '#a0d2eb', '#fff', '#fff685', '#fff'];

button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

//accordion
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));





// Assignment 5
//  Switch Statements - greeting
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById("greeting").innerText = greeting;
}
displayGreeting();


// Selecting and Manipulating HTML Elements - Select rating stars
function setRating(event, rating) {
    const stars = event.currentTarget.parentElement.children;

    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('selected');
    }

    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
    }
}

//// Keyboard Event Handling
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".card");
    
    // Add keyboard event handlers to each product card
    products.forEach(product => {
        product.setAttribute("tabindex", "1");
        product.addEventListener("keydown", (event) => {
            const readMoreButton = product.querySelector("button");

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                readMoreButton.click();
            }
        });
    });


    // Manipulating Attributes (examples below) - Implement a “Read More”
    window.toggleReadMore = function(dotsId, moreId, btnId) {
        const dots = document.getElementById(dotsId);
        const moreText = document.getElementById(moreId);
        const btn = document.getElementById(btnId);

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btn.textContent = "Read More";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btn.textContent = "Read Less";
            moreText.style.display = "inline";
        }
    };
});

//  Play Sounds
document.addEventListener("DOMContentLoaded", () => {
    const changeColorBtn = document.getElementById("changeColorBtn");
    const notificationSound = document.getElementById("notificationSound");

    changeColorBtn.addEventListener("click", () => {
        notificationSound.play();
    });
});





//Assignment 6
// 2. User Preferences - Light/Dark Mode.
const checkbox = document.getElementById('checkbox');

document.addEventListener('DOMContentLoaded', () => {
    // Load and apply the saved theme when the page is loaded
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
    // Update the theme and save the preference when the checkbox is toggled
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



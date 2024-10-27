function validateFormAndShowPopup(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;
    var emailHelp = document.getElementById("emailHelp");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    emailHelp.textContent = "";
    
    if (!emailPattern.test(email)) {
        emailHelp.textContent = "Please enter a valid email address.";
        emailHelp.style.color = 'red'; 
        return false; 
    }
    
    showSuccessPopup();
}
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => s.style.color = i <= index ? 'gold' : 'gray');
    });
});


function showSuccessPopup() {
    var popup = document.getElementById("successPopup");
    popup.style.display = "block";
}

function closeSuccessPopup() {
    var popup = document.getElementById("successPopup");
    popup.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resetButton').addEventListener('click', function() {
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => input.value = '');
        document.querySelectorAll('#contactForm input[type="radio"]:checked').forEach(radio => radio.checked = false);
    });
});



function togglePopup() {
    var popup = document.getElementById("popupForm");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}




//Assignment 6
// 2. User Preferences - Light/Dark Mode.
const checkbox = document.getElementById('checkbox');
document.addEventListener('DOMContentLoaded', () => {
    // Check for the saved theme in localStorage
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




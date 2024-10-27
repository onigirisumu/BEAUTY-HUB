// faq section
const accordionItems = document.querySelectorAll(".tutorial-accordion .tutorial-item button");
  
    accordionItems.forEach((button) => {
      button.addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true";
  
        
        accordionItems.forEach((item) => {
          item.setAttribute("aria-expanded", "false");
          item.nextElementSibling.style.maxHeight = 0;
          item.nextElementSibling.style.opacity = 0;
        });
  
        
        if (!expanded) {
          this.setAttribute("aria-expanded", "true");
          const content = this.nextElementSibling;
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = 1;
        }
      });
});


// popup section
var feedbackPopup = document.getElementById("popupFeedbackForm");
var openFeedbackButton = document.getElementById("giveFeedbackButton");
var closeFeedbackButton = document.getElementById("closeFeedbackFormButton");


openFeedbackButton.onclick = function() {
    feedbackPopup.style.display = "block";
}

closeFeedbackButton.onclick = function() {
    feedbackPopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === feedbackPopup) {
        feedbackPopup.style.display = "none";
    }
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




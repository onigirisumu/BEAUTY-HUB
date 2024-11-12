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
document.addEventListener("DOMContentLoaded", function() {
    const showLoginModal = document.getElementById("showLoginModal");
    const showSignUpModal = document.getElementById("showSignUpModal");

    const signupModalElement = document.getElementById("signupModal");
    const loginModalElement = document.getElementById("loginModal");

    const signupModal = new bootstrap.Modal(signupModalElement, {
        backdrop: 'static',
        keyboard: true
    });
    const loginModal = new bootstrap.Modal(loginModalElement, {
        backdrop: 'static',
        keyboard: true
    });

    showLoginModal.addEventListener("click", function(event) {
        event.preventDefault();
        signupModal.hide();
        loginModal.show();
        removeBackdrop();
    });

    showSignUpModal.addEventListener("click", function(event) {
        event.preventDefault();
        loginModal.hide();
        signupModal.show();
        removeBackdrop();
    });

    const closeSignupModalButton = document.querySelector("#signupModal .close");
    const closeLoginModalButton = document.querySelector("#loginModal .close");

    closeSignupModalButton.addEventListener("click", function() {
        closeBothModals();
    });

    closeLoginModalButton.addEventListener("click", function() {
        closeBothModals();
    });

    function closeBothModals() {
        signupModal.hide();
        loginModal.hide();
        removeBackdrop();
    }

    function removeBackdrop() {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }

    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const phone = document.getElementById("signupPhone").value;
        const password = document.getElementById("signupPassword").value;

        if (!username || !email || !phone || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const user = {
            username: username,
            email: email,
            phone: phone,
            password: password,
        };
        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "profile.html";
    });

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            window.location.href = "profile.html";
        } else {
            alert("Incorrect email or password. Please try again.");
        }
    });

});


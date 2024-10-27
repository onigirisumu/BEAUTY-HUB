// Advanved JavaScript

// Manipulating Attributes - Read More Button 
function toggleContent() {
    const content = document.getElementById('moreContent');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';

    const button = document.getElementById('readMoreButton');
    button.style.padding = '5px 10px';
    button.style.fontSize = '14px';
    button.style.backgroundColor = '#007bff';
    button.style.border = 'none';
    button.style.color = 'white';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s';

    button.onmouseover = function() {
        button.style.backgroundColor = '#0056b3';
    };
    button.onmouseout = function() {
        button.style.backgroundColor = '#007bff';
    };
}

function setRating(event, rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#d5006d'; 
        } else {
            star.style.color = '#ffffff'; 
        }
    });
    document.getElementById('messageContainer').textContent = `You rated us: ${rating} star${rating > 1 ? 's' : ''}`;
}

// Responding to Events with Callbacks - multi-step form
document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const backBtns = document.querySelectorAll(".back-btn");
    const submitBtn = document.querySelector(".submit-btn");
    const successMessage = document.getElementById("successMessage");

    let currentStep = 0;

    
    const showStep = (step) => {
        formSteps.forEach((formStep, index) => {
            formStep.style.display = index === step ? "block" : "none";
        });
    };

    
    const updateReview = () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const product = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;

        const reviewDiv = document.getElementById("review");
        reviewDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Product:</strong> ${product}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
        `;
    };

    
    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            
            const currentInputs = formSteps[currentStep].querySelectorAll("input");
            let isValid = true;
            currentInputs.forEach((input) => {
                if (!input.checkValidity()) {
                    isValid = false;
                    input.reportValidity(); 
                }
            });

            if (isValid) {
                if (currentStep === formSteps.length - 2) {
                    updateReview(); 
                }
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    
    backBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        successMessage.style.display = "block"; 
        formSteps.forEach((formStep) => {
            formStep.style.display = "none"; 
        });
    });

    
    showStep(currentStep);
});





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




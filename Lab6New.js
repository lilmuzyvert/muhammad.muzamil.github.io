// Existing Code
function userName() {
    var name = prompt("Please enter your name here");

    if (name) {
        document.getElementById("welcomeMessage").textContent = 'Welcome, ' + name + '!';
    }
}

var modal = document.getElementById('myModal');
var img = document.getElementById('myImage');
var modalImg = document.getElementById('enlargedImg');

img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = 'enlarged.png';
}

var close = document.getElementsByClassName('close')[0];

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

var navbarLinks = document.querySelectorAll('#navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });

    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'gray'; 
    });

    link.addEventListener('mouseout', function() {
        if (!this.classList.contains('active')) {
            this.style.backgroundColor = ''; 
        }
    });
});

// New Code for Form Handling

// Function to collect form data and store it in localStorage
function submitForm() {
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const industry = document.getElementById('industry').value;

    // Collect selected roles (multiple checkboxes)
    const roles = [];
    document.querySelectorAll('input[name="role"]:checked').forEach((checkbox) => {
        roles.push(checkbox.value);
    });

    const comments = document.getElementById('comments').value;

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        gender: gender,
        industry: industry,
        roles: roles,
        comments: comments
    };

    // Store the object in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Notify the user that the form has been submitted
    alert("Form Submitted! I will contact you soon!");
}

// Optional: Function to clear localStorage if needed
function clearStorage() {
    localStorage.removeItem('contactFormData');
    alert("Local storage cleared!");
}


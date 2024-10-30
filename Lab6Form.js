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

    // Function to clear localStorage if needed
function clearStorage() {
    localStorage.removeItem('contactFormData');
    alert("Local storage cleared!");
}
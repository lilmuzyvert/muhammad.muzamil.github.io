function userName() {
    var name = prompt ("Please enter your name here");

    if (name) {
        document.getElementById("welcomeMessage").textContent = 'Welcome, ' + name + '!';
} else {
    document.getElementsById('welcomeMessage').textContent = 'No Name Entered. Please enter your name.';
}
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nameButton').addEventListener('click', displayWelcomeMessage);
});
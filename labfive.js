function userName() {
    var name = prompt("Please enter your name here");

    if (name) {
        document.getElementById("welcomeMessage").textContent = 'Welcome, ' + name + '!';
    }
}

// image adjusting
var modal = document.getElementById('myModal');
var img = document.getElementById('myImage');
var modalImg = document.getElementById('enlargedImg'); // Corrected ID

img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = 'enlarged.png';
}

var close = document.getElementsByClassName('close')[0];

// Fix typo in function declaration
close.onclick = function() {
    modal.style.display = 'none'; // Corrected to 'function()'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

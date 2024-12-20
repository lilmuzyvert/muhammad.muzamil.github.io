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

//function to enlarge the image when selected.

img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = 'enlarged.png';
}

// close button (X)
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
// navigation bar functions to look different when selected, hovering, etc.
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




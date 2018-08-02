// Inicializar Firebase
var config = {
    apiKey: "AIzaSyBYp2IfztlBcWgldVG0KeT18ucQQCQ2kvU",
    authDomain: "translab-labo.firebaseapp.com",
    databaseURL: "https://translab-labo.firebaseio.com",
    projectId: "translab-labo",
    storageBucket: "translab-labo.appspot.com",
    messagingSenderId: "730964263598"
};
firebase.initializeApp(config);



//Navbar
function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

//Opciones
function balance() {
    window.location = "balance.html";
}

function rate() {
    window.location = "rate.html";
}

function profile() {
    window.location = "profile.html";
}

function faq() {
    window.location = "faq.html";
}




//Acordeon
function accordeon(id) {
    const faq = document.getElementById(id);
    if (faq.className.indexOf("w3-show") == -1) {
        faq.className += " w3-show";
    } else {
        faq.className = faq.className.replace(" w3-show", "");
    }
}
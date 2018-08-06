// Navbar
function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}
module.exports = w3_open;

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}
module.exports = w3_close;

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


// Acordeon
function accordeon(id) {
    const faq = document.getElementById(id);
    if (faq.className.indexOf("w3-show") == -1) {
        faq.className += " w3-show";
    } else {
        faq.className = faq.className.replace(" w3-show", "");
    }
    module.exports = accordeon;
}


// Logout

function logoutWithFirebase() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sesion finalizada")
            window.location = "../index.html";
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code)
            console.log("Error de Firebase > Mensaje > " + error.message)
        });
    module.exports = logoutWithFirebase;
}
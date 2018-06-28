email = "";
bip = "";

/* Login */

function go() {
    let email = document.getElementById("mail").value;
    console.log(email)
    localStorage.setItem("correo", email);
    let password = document.getElementById("password").value;
    console.log(password)
    let hasNumber = password.match(/[0-9]/g);


    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValidEmail = re.test(email);

    if (isValidEmail && hasNumber) {
        window.location = "opciones.html";
        return true;
    } else {
        alert("Not a valid e-mail address or password");
        return false;
    }
}

/*Navbar*/
function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

/*Opciones*/
function saldo() {
    window.location = "saldo.html";
}

function tarifa() {
    window.location = "tarifa.html";
}

function perfil() {
    window.location = "perfil.html";
}

function faq() {
    window.location = "faq.html";
}


/*llamar datos*/



/* perfil*/

window.onload = function() {
    var correo = localStorage.getItem("correo");
    document.getElementById("correologin").innerHTML = correo;
};


function myFunction() {
    bip = parseInt(document.getElementById("bip").value);
}

fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${bip}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })

/* Acordeon*/
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
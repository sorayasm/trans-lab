email = "";
bip = "";

//Login

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

//Navbar
function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

//Opciones
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






//Perfil

window.onload = function() {
    let correo = localStorage.getItem("correo");
    document.getElementById("correologin").innerHTML = correo;
};


function addcard() {
    bip = document.getElementById("bip").value;
    document.getElementById("bip").value = "";
    let tarjeta = localStorage.getItem("bip");
    const cont = document.getElementById("cont");
    const newBip = document.createElement("div");
    const contenedorElemento = document.createElement("p");
    let textNewBip = document.createTextNode(bip);
    contenedorElemento.appendChild(textNewBip);
    newBip.appendChild(contenedorElemento);
    cont.appendChild(newBip);
}

//Saldo

fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${bip}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })

// 

//Acordeon
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
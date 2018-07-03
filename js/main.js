let name = "";
let email = "";
let password = "";
let bip = "";

//Login

function go() {
    name = document.getElementById("name").value;
    localStorage.setItem("nombre", JSON.stringify(name));
    email = document.getElementById("mail").value;
    localStorage.setItem("correo", JSON.stringify(email));
    password = document.getElementById("password").value;
    localStorage.setItem("password", JSON.stringify(password));

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(email);
    let hasNumber = password.match(/[0-9]/g);

    if (isValidEmail && hasNumber) {
        window.location = "opciones.html";
        return true;
    } else {
        alert("Por favor ingresa una dirección de correo válida");
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
    document.getElementById("correologin").innerHTML = JSON.parse(localStorage.getItem("correo"));
    document.getElementById("saludo").innerHTML = "Hola " + JSON.parse(localStorage.getItem("nombre"));
};


function addcard() {
    bip = document.getElementById("bip").value;
    document.getElementById("bip").value = "";
    const cont = document.getElementById("cont");
    const newBip = document.createElement("div");
    const contenedorElemento = document.createElement("p");
    let textNewBip = document.createTextNode(bip);
    contenedorElemento.appendChild(textNewBip);
    newBip.appendChild(contenedorElemento);
    cont.appendChild(newBip);
}

//Saldo

function addcard2() {
    let tarjeta = localStorage.getItem("bip2");


}

/*fetch('http://www.psep.cl/api/Bip.php?&numberBip=${bip}')
    .then(response => response.json())
    .then(data => {
        const dataBip = Object.values(data)

        let numberBip = dataBip[0];
        document.getElementById("databip").innerHTML = 'numero de bip ' + numberBip;

        let statusBip = dataBip[1];
        document.getElementById("databip1").innerHTML = 'Status ' + statusBip;

        let amountBip = dataBip[2];
        document.getElementById("databip2").innerHTML = 'saldo ' + amountBip;
        saldoBip = Number(amountBip.replace(/[$,.]+/g, ""));

        let dayBip = dataBip[3];
        document.getElementById("databip3").innerHTML = 'fecha de carga ' + dayBip;

    })
*/

//Acordeon
function accordeon(id) {
    const faq = document.getElementById(id);
    if (faq.className.indexOf("w3-show") == -1) {
        faq.className += " w3-show";
    } else {
        faq.className = faq.className.replace(" w3-show", "");
    }
}
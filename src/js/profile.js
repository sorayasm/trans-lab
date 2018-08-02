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
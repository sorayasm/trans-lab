// User logged
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        let currentUser = user.uid;
        let currentUserEmail = user.email;
        console.log(currentUser + " " + currentUserEmail + " ");
        document.getElementById("greetings").innerHTML = currentUserEmail;
    } else {
        window.location = "../index.html";
    }
});




//Profile Page


/*

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
}*/

// Profile info





//Saldo
/*
function addcard2() {
    let tarjeta = localStorage.getItem("bip2");


}*/

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
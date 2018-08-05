// Parameters
let currentUser = 0;
let currentUserEmail = 0;


// User logged & email
firebase.auth().onAuthStateChanged(function getUser(user) {
    // Parameters
    currentUser = user.uid;
    currentUserEmail = user.email;
    // Print greetings or logout
    if (user) {
        console.log(currentUser + " " + currentUserEmail + " ");
        document.getElementById("greetings").innerHTML = currentUserEmail;
    } else {
        window.location = "../index.html";
    }


    /*
        document.getElementById("bip").value = "";
        const cont = document.getElementById("cont");
        const newBip = document.createElement("div");
        const contenedorElemento = document.createElement("p");
        let textNewBip = document.createTextNode(bip);
        contenedorElemento.appendChild(textNewBip);
        newBip.appendChild(contenedorElemento);
        cont.appendChild(newBip);
    }*/


});

// Adding Bip cards to current user in Database




function addcard() { // agregar tarjeta a usuario actual
    let input = document.getElementById("bip").value;
    firebase.database().ref(`usuarios/` + currentUser).child(`bip`).set(input);
}

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
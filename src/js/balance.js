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
    } else {
        window.location = "../index.html";
    }
    firebase.database().ref().child(`usuarios/` + currentUser + `/bip`).on("child_added",
        function(data) {
            v = data.val();
            console.log(v)
                //select
            select = document.createElement("option")
            select.text = v;
            select.value = v;
            list.appendChild(select);
        })
});



// Select function
function select(event) {
    cardSelected = this.options[this.selectedIndex].value;
    console.log(cardSelected)
}

// Adding Bip cards to current user in Database
function addcard() {
    let input = document.getElementById("bip").value;
    if (input == "") {
        alert("Por favor ingresa una tarjeta.")
    } else {
        firebase.database().ref(`usuarios/` + currentUser).child(`bip`).push(input);
        document.getElementById("bip").value = ""; // clean bip input
    }

}

//function showNewCard() {

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
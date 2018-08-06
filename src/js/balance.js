// Parameters
let currentUser = 0;
let currentUserEmail = 0;
let calculate = 760;
let bipcard = "";


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
            //select
            select = document.createElement("option")
            select.text = v;
            select.value = v;
            select.name = v;
            list.appendChild(select);
        })
});

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

// Select bip function
function displayOption() {
    bipcard = document.getElementById("list").value;
    console.log("Tarjeta: " + bipcard)
}


//Print total balance
function total() {
    let url = (`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipcard}`);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataBip = Object.values(data);
            const t = dataBip[2];
            console.log("Saldo de la tarjeta: " + t);
            // Print Balance
            document.getElementById("total").style.visibility = "visible";
            const total = document.getElementById("total");
            const p = document.createElement("p");
            p.innerHTML = `<p>Saldo: ` + t + `</p>`;
            total.appendChild(p);
        })
}


// Select rate function
function displayRate() {
    calculate = document.getElementById("rate").value;
    console.log("Tarifa: " + calculate)
}
//Print total balance minus rate
function rateTotal() {
    let url = (`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipcard}`);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataBip = Object.values(data);
            const amount = dataBip[2];
            const amountValue = Number(amount.replace(/[$,.]+/g, ""));
            const r = amountValue - calculate;
            console.log(amountValue + " - " + calculate + " = " + r);
            // Print Amount minus Rate
            document.getElementById("total").style.visibility = "visible";
            const total = document.getElementById("total");
            const p = document.createElement("p");
            p.innerHTML = `<p>Saldo: ` + r + `</p>`;
            total.appendChild(p);
        })
}
module.export = displayOption()
module.export = total()
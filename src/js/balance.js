// Parameters
let currentUser = 0;
let currentUserEmail = 0;
let bipcard = 0;
let calculate = 760;


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
function displayOption(option) {
    bipcard = option;
    console.log(bipcard)
}


//Print total balance
function total(bipcard) {
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${bipcard}`) /////////ARREGLAR
        .then(response => response.json())
        .then(data => {
            const dataBip = Object.values(data)
            const t = dataBip[2];
            console.log(t);
            document.getElementById("total").style.visibility = "visible";
            const total = document.getElementById("total");
            const p = document.createElement("p")
            p.innerHTML = `<p>Saldo: ` + t + `</p>`;
            total.appendChild(p);
        })
}

// Select rate function
function displayRate(rate) {
    calculate = rate;
    console.log(rate)
}
//Print total balance minus rate
function rateTotal(calculate, bipcard) {
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=666`) /////////ARREGLAR
        .then(response => response.json())
        .then(data => {
            const dataBip = Object.values(data)
            const r = dataBip[2].value - parseInt(calculate);
            console.log(dataBip[2]);
            document.getElementById("rate").style.visibility = "visible";
            const total = document.getElementById("rate");
            const p = document.createElement("p")
            p.innerHTML = `<p>Saldo: ` + r + `</p>`;
            total.appendChild(p);
        })
}

// Select bip function
function displayRate(rate) {
    calculate = rate;
    console.log(rate)
}
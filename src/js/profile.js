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

    firebase.database().ref().child(`usuarios/` + currentUser + `/bip`).on("child_added",
        function(data) {
            v = data.val();
            console.log(v)
            const p = document.createElement("p")
            p.innerHTML = `<p>` + v + `</p>`;
            cont.appendChild(p);
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
};
module.exports.addcard = addcard;
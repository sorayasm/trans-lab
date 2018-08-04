let name = "";
let email = "";
let password = "";

//crear cuenta
function register() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(email);
    let hasNumber = password.match(/[0-9]/g);
    let hasLength = password.value = "" || password.length <= 8;
    let empty = name.length == 0 || email.length == 0;

    if (isValidEmail && hasNumber && hasLength == !empty) {
        console.log("usuario aprobado");
        registerWithFirebase();
    } else if (isValidEmail && hasNumber) {
        console.log("clave muy larga");
        alert("Por favor revisa tu clave, la contraseña debe tener máximo 8 caracteres.");
    } else if (hasNumber && hasLength) {
        console.log("correo no valido");
        alert("Por favor ingresa una dirección de correo válida.");
    } else if (empty) {
        alert("Por favor completa todos los datos.");
    } else {
        console.log("clave con letras");
        alert("Por favor revisa tu clave, la contraseña debe tener solo numeros.");
    }

}


// Registro
function registerWithFirebase() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            firebase.database().ref(`usuarios/${userData.user.uid}`).set({
                mail: userData.user.email,
                uid: userData.user.uid,
                username: name,
            });
            console.log("usuario se creo");
            window.location = "../index.html";
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code);
            console.log("Error de Firebase > Mensaje > " + error.message);

        });
}
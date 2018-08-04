//Login
function loginWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
            window.location = "src/options.html";
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code);
            console.log("Error de firebase > Mensaje > " + error.message);
            alert("Revisa todos los datos ingresados. Correo y contraseña son obligatorios.");
        });
}
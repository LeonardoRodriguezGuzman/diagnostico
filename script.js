const us = 'admin', ps = 123;
function iniciar() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if (user == "") {
        alert("El campo usuario esta vacio.");
        document.getElementById('user').focus();
        return;
    }
    if (pass == "") {
        alert("El campo contraseña esta vacio.");
        document.getElementById('pass').focus();
        return;
    }

    if (user != us) {
        alert("Usuario invalido");
        return;
    }

    if (pass != ps) {
        alert("Contraseña incorrecta");
        return;
    }

    alert("Datos correctos");
}
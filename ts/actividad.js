function validarUsuario(nombre, contraseña) {
    var usuarioValido = "Julian";
    var contraseñaValida = "12345";
    if (usuarioValido === nombre && contraseñaValida === contraseña) {
        console.log("hola, ".concat(nombre, ", has iniciado correctamente"));
    }
    else {
        console.log("nombre de usuario o contraseña incorrectos");
    }
}
validarUsuario("Julian", "12345");

function validarUsuario(nombre:string, contraseña:string) {
    const usuarioValido = "Julian"
    const contraseñaValida = "12345" 

    if(usuarioValido === nombre && contraseñaValida === contraseña){
        console.log(`hola, ${nombre}, has iniciado correctamente`)
    }
    else{
        console.log("nombre de usuario o contraseña incorrectos")
    }
}

validarUsuario("Julian","12345")
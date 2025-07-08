document.getElementById("miFormulario").addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    
    console.log("Nombre: ", nombre);
    console.log("correo: ",correo);
});

function guardarDatos(){
    alert(`Guardado:\nNombre: ${nombre}\nCorreo: ${correo}`)
}


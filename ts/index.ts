let saludo : string = "hola este es mi primer archivo typescript";
console.log(saludo)

interface Persona {
    nombre:string;
    edad:number;
}

const p: Persona = {
    nombre:"Ana",
    edad:30
}

let numeros : number[] = [1,2,3];
let tupla: [string,number] = ["edad",25]

let id: string | number;
id = 101

enum Rol {Admin,Usuario,Invitado}
let miRol: Rol =Rol.Usuario

// caso de uso real

enum estadoPedido {Pendiente,Enviado,Entregado}
function procesar(p:estadoPedido) {
    if(p === estadoPedido.Enviado){
        console.log("en camino")
    }
}

//clases


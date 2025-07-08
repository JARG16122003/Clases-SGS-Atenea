const numeroAleartorio = (min , max) => Math.floor(Math.random() * (max - min + 1)) + min;
let numero = numeroAleartorio(1,10);
console.log(numero);

let edad = 20;

if(edad >=18){
    console.log("Eres mayor de edad")
}
else{
    console.log("eres menor de edad")
}

// let dia = prompt("escriba un dia (Lunes a viernes)")

// switch (dia) {
//     case "sabado" || "domingo":
//         console.log("chistoso, escogiste el fin de semana :)")
//         break;
//     case "lunes" || "martes":
//         console.log("inicio de semana")
//         break;
//     case "miercoles":
//         console.log("mitad de semana")
//         break;
//     case "jueves":
//         console.log("casi es viernes")
//     case "viernes":
//         console.log("es viernes, hora de disfrutar")
//     default:
//         console.log("dia no reconocido xd")
//         break;
// }
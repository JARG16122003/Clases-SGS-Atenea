let numero = parseInt(prompt("Ingrese un numero: "));
let esPrimo = true;
if(numero <= 1){
    esPrimo = false;
}
else{
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
           esPrimo =  false;
           break;
        }
    }
    
}

if(esPrimo){
    console.log("es un numero primo")
}
else{
    console.log("no es un numero primo")
}
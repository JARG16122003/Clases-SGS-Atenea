
let iteracion = 1
let resultados = []
let e = 1

do{
    function areaTriangulo(){
    let base = prompt("Escribe la base del triangulo");

    let altura = prompt("Escribe la altura del triangulo");

    let area = (parseInt(base) * parseInt(altura))/2;
    return area
}

alert("el area del triangulo es: " + areaTriangulo())

let pregunta = prompt("desea Continuar: (si/no)")

if(pregunta.toLowerCase() == "no"){
    iteracion = 0
}



}while(iteracion == 1);





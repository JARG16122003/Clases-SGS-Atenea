let numeros = [];

for (let i = 0; i < 3; i++) {
    let fila = []
  for (let j = 0;j < 4; j++){
    let valor = prompt("ingrese un dato numerico")
    fila.push(valor)
  }
  numeros.push(fila)
}

numeros.sort()

console.log(numeros)
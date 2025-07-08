document.getElementById("suma").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = num1 + num2
})

document.getElementById("resta").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerText = num1 - num2
})
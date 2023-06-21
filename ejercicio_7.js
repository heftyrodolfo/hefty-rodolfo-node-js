const prompt = require('prompt-sync')();

var nro1 = parseInt(prompt("Ingrese un numero: "))
var nro2 = parseInt(prompt("Ingrese otro numero: "))
if (nro1>nro2){
    console.log ("el primer numero es mayor", nro1)
}
else {
    console.log ("el segundo numero es mayor", nro2)
}
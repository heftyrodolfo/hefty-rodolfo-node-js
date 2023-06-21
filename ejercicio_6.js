const prompt = require('prompt-sync')();

var grado1= parseInt(prompt('ingrese el primer grado : '));
var grado2= parseInt(prompt('ingrese el segundo grado : '));
var grado3= parseInt(prompt('ingrese el tercer grado : '));
valortotal = (grado1 + grado2 + grado3)
if (valortotal==180){
    console.log("el triangulo es valido")
}
else   {
    console.log ("el triangulo no es valido y su valor es: ", +valortotal)
}
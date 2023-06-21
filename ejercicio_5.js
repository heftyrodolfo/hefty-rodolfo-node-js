const prompt = require('prompt-sync')();

var celsius, fare
fare = prompt("Ingresa grados Fahrenheit: ");
var celsius= (fare- 32) * (5/9);
console.log ("la temperatura celsius es: ", celsius)




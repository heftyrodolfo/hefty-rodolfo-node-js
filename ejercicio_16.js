const prompt = require('prompt-sync')();
function rango(comienzo, final, sumador) {
  let numeros = [];
  for (let i = comienzo; i <= final; i += sumador) {
    numeros.push(i);
  }
  return numeros;
}

let numerosEntre5y20 = rango(5, 50, 9);
console.log(numerosEntre5y20); // [5, 8, 11, 14, 17, 20]
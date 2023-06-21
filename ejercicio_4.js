const prompt = require('prompt-sync')();

nro = parseInt(prompt('Ingresar numero : '));

if ( nro%5==0) {
    console.log ("si es divisible")
}
else {
    console.log("no es divisible")
}

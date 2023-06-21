const prompt = require('prompt-sync')();

var edad = prompt("ingrese la edad de la persona ")
 
if (edad<13) {
    console.log("es un niño ")
}

else {
    if (edad>13 && edad<=17) {
        console.log("es un adolescente")
    }
    else {
        if (edad=>18 && edad<110) {
            console.log("es un adulto")
        }
        else {
            console.log("no es una edad valida")
        }

    }

}
const prompt = require('prompt-sync')();

var num1=prompt("ingrese el valor del primer numero:")
var num2=prompt("ingrese el valor del primer segundo:")
var num3=prompt("ingrese el valor del primer tercer:")

function operadoresLogicos(num1, num2, num3) {
    if (num1>num2 && num1>num3 && num1>0) {
      console.log ("Número 1 es mayor y positivo");
    } 
    else if (num1<0 && num2<0 && num3<0) {
      console.log ("Hay negativos");
    } 
    else if (num3>num1 && num3>num2) {
      num3++;
      console.log ("num3");
    } 
    else if (num1==0 && num2==0 && num3==0) {
      console.log ("Error");
    } 
    else {
      console.log ("false");
    }

  }

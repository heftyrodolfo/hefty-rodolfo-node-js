const prompt = require('prompt-sync')();
        var nro1,nro2;


        var palabra1= prompt('ingrese una palabra: ');
        var palabra2= prompt('ingrese una palabra: ');
        var igual 
        if (palabra1 == palabra2) {
                console.log("true")
                igual=true
        } 
        
        else {
        
                console.log("false")
                igual=false
        } 
        
        caracteres1= palabra1.length;
        caracteres2=palabra2.length;

        if (caracteres1==caracteres2) {
                console.log("tiene la misma cantidad de letras")
                cantidadletras=true

        }
        else {
                console.log("no tienen la misma cantidad de letras")
                cantidadletras=false
        }
        
       
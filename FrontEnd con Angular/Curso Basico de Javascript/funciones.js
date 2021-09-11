'use strict'
//declarativas
function miFuncion(){
    return 3;
}

miFuncion();

function saludarEstudiantes(estudiante, dia){
console.log(`Hola ${estudiante}, como va tu ${dia}`);
}

saludarEstudiantes("Jhoan", "Martes");
//Expresion
var miFuncion = function(a, b){
    return a + b;
}



miFuncion(1,3);


var suma = function(b, c){
 var resultado = b + c;
 return resultado;
}


suma(3, 4);
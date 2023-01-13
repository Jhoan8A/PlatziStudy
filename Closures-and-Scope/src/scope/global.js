// Variables

var a; //Declarando
var b = "b"; // declaramos y asignamos
b = "bb"; //reasignación
var a = "aa"; //redeclaración

//Global Scope

var fruit = "Apple"; //variable global
console.log(fruit);
function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';// ojo no se declaro solo se asigno, por eso queda global
    console.log(country);
}

countries();
console.log(country);

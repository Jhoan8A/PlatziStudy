//Var

var firstName = 'Pepe'; //declara / asigna
console.log('DECLARA Y ASIGNA', firstName);
firstName = 'Pedro';//Reasignar
console.log('Reasigna', firstName);

var firstName = 3;
console.log('REDECLARACIÓN', firstName);

//LET

//let me permite reasignar el valor a una variable, pero no redeclararla

let fruit = "Apple";
console.log('declara => ', fruit);
fruit = 'Banana';
console.log('Reasigna => ', fruit);

//let fruit = 'Kiwi';
//si descomento la linea 20 saca error porque no se puede redeclarar

//CONST

//const no se puede reasignada ni redeclarada
const animal = 'Cat';// Declara y asigna
animal = 'Dog';

/*Ejemplo que si deja mutar ya que el const es el array y ya esta referenciado, 
los valores que se asignan por metodos no hacen parte de la referencia.*/

const vehicles = [];
vehicles.push("PEPE");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
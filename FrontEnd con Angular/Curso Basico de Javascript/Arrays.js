var frutas = ["Pera", "Manzana", "Durazno"];

//agrega al final del arreglo el nuevo dato 
var agregarFruta = frutas.push("Uvas");

//borra el ultimo dato del arreglo
var quitarFruta = frutas.pop("Uvas"); 

//agrega al iniciar del arreglo el nuevo dato 
var agregarFrutaInicio = frutas.unshift("Uvas");

//borra el primer dato del arreglo
var quitarFrutaInicio = frutas.shift("Uvas");

//Obtener posicion de un dato en un array
var obtenerIndex = frutas.indexOf("Durazno");
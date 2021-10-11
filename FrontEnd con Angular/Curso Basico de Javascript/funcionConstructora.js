//funcion que permite crear carros
function carro (marca, modelo, annio){
   //recordar que this, hace referencia al objeto global, en este caso a la funcion carro
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var carroNuevo = new carro("Tesla", "Modelo 3", 2021);
var carroNuevo1 = new carro("Tesla", "Modelo x", 2021);
var carroNuevo2 = new carro("Tesla", "Modelo 3", 2021);
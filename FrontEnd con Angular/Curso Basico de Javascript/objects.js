var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2012
}

//objeto con funcion 
var carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2012,
    detalleCarro: function(){
        console.log(`El detalle del auto es: 
                      Modelo: ${this.modelo}
                      Annio: ${this.annio}`);
    }
}

//para llamar la funcion dentro del objeto se llama asi
carro1.detalleCarro();
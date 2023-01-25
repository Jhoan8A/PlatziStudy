console.log(nameOfDog);//error llamaste primero la variable y aun no estaba declarada ni asignada
var nameOfDog = "Perrito";



//no se ha inicializado la variable perro antes de llamarla
namesOfDogs();

function namesOfDogs(){
    console.log(`El mejor perrito es ${perro}`);
}

var perro = 'PEPE';

//se ha inicializado la variable perro antes de llamarla
var perro = 'PEPE';
namesOfDogs();

function namesOfDogs(){
    console.log(`El mejor perrito es ${perro}`);
}


//aquí ni si quiera se ha declararo perro, por lo tanto dara error de referencia

namesOfDogs();

function namesOfDogs(){
    console.log(`El mejor perrito es ${perro}`);
}

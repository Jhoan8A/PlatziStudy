
/*Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código varias veces

for/in - recorre las propiedades de un objeto

for/of - recorre los valores de un objeto iterable

while - recorre un bloque de código mientras se cumple una condición específica

do/while - también recorre un bloque de código mientras se cumple una condición específica*/


var estudiantes = ["Pepe", "Camila", "Roberto", "Magali"];

function saludarEstudents(estudiantes){
    console.log(`Hola Estimad@, ${estudiantes}`);
}

//for simple con i
for (var i = 0; i < estudiantes.length; i++){
    
saludarEstudents(estudiantes[i]);
    //conole.log("Fruta: "+ estudiantes[i]);

}


//for of
for (var estudiante of estudiantes){
    
    saludarEstudents(estudiante);
        //conole.log("Fruta: "+ estudiantes[i]);
    
    }

//while o mientras    

while(estudiantes.length < 0){
    console.log("ESTUDIANTES: "+ estudiantes);
   //recordar que shift quita el primer dato del array
    var estudiante = estudiantes.shift();
    saludarEstudents(estudiante);
}
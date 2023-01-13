function fruits() {
  if (true) {
    var fruit1 = "Apple";//function scope
    let fruit2 = "Kiwi"; //block scope
    const fruit3 = "Banana"; //block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  console.log(fruit2);// no puedo acceder a ella porque es block Scope y este console log no esta dentro de las {} donde se declara la variable
  console.log(fruit3);
}

fruits();

//NO FUNCIONA PORQUE NO ES UNA CLOSURE
// function moneyBox(coins){

//     let saveCoins = 0;
//     saveCoins += coins;

//     console.log(`Money Box => ${saveCoins} `);

// }

// moneyBox(5);
// moneyBox(5);

//AHORA SI CLOSURE

function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
 
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins();
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


function alcancia(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      return contenido
    }
  }
  
  const miAlcancia = alcancia(2)
  miAlcancia(5) // 7
  miAlcancia(4) // 11
  
  const otraAlcancia = alcancia(5)
  otraAlcancia(30) // 35
  otraAlcancia(20) // 55
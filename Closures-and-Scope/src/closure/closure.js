function sumWithClosure(firstNum) {
    // Tu código aquí 👈
  
    numbers = [];
   function validateNumbers(){
    numbers.push(firstNum);
    console.log(numbers.length);
    
     if (numbers.length == 2){
        console.log(numbers);
        let num1 = numbers[0];
        let num2 = numbers[1];
        sum(num1, num2);
        function sum(num1, num2){
            if (num2 == undefined){
                num2 = 0;
            }
          let result = (num1 + num2);
            console.log("Resultado =>", result);  
        }
       
     }
   }
   return validateNumbers();


    //let num1 = firstNum;


  }

  sumWithClosure(5);
  sumWithClosure ();

  
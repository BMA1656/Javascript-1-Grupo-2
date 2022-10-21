function mayorN(){
    let arr = [121,232,1,56];
    let mayor;
      for (let i = 0; i < arr.length; i++) {
      if(i == 0) {
        mayor = arr[i];
      }
        else if (arr[i] > mayor) {
          mayor = arr[i];
         }
        }
      return 'el mayor es: '+mayor;
    }    
    console.log(mayorN())
    
    
    function palindromo(palab){ 
      let array =[]; 
      let array2=[];
       for(let i of palab) {
       array.push(i);
    }   for (let i = array.length - 1; i> -1; i--){
            array2.push(array[i]);  
    }
        
     
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
         for (let i = 0; i < array2.length; i++) {
          for (let j = 0; j < array2[i].length; j++) {
          if (array[i][j] != array2[i][j]){
            return 'No es un palindromo'
          }
            else {
              return 'Es un palindromo'
            }
      }
    }
      }
    }    
    }  
    console.log(palindromo('casa'));
    
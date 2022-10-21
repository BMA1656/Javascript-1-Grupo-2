function mayorN(){
    const arr = [121,232,1,56];
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

    function Contador(){
      const array = [
       [1,0,0], 
       [0,1,1],
       [0,1,0],
       ];
     let cont = 0;
       
     for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
         if (array[i][j] == 0){
           cont ++
         }
       }
     }
     return 'El numero de ceros es: '+cont
     }
     
     console.log(Contador())

     function Duplicados(num){
      let dup = [];
      for (let i = 0; i < num.length; i++) {
        if (num[i + 1] === num[i]) {
          dup.push(num[i]);   
        }  
      } 
        if(dup.length >= 1){
          return dup;
        }
        else{
          return 'no hay repetidos'
        }
      }
      console.log(Duplicados([7,7,8,9,9,1,2,3,12,5,1,1]))


      function asterico(num){
        for(let i = 0; i <= num; ++i) {
            let resultado = ' ';
          for(let j = 1; j < i; ++j) {
                resultado += '* ';
            }
              console.log(resultado);
        }
          
        }
        console.log(asterisco(11))
    
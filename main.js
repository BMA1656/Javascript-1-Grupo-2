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
      return mayor;
    }  
    
    console.log(mayorN())


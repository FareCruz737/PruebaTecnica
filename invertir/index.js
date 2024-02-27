function invertirTod(array) {

    const originalArray = [...array];
    

    const caracter = originalArray.filter((element, index) => typeof element === 'string');
    const posicion = caracter.map((_, index) => index);
  
 
    const revertir = originalArray.filter(element => typeof element !== 'string').reverse();
  
 
    const final = originalArray.map((index) => {
      return posicion.includes(index) ? caracter.shift() : revertir.shift();
    });
  
    return final;
  }
  

  const entrada = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8];
  const salida = invertirTod(entrada);
  
  console.log(salida);
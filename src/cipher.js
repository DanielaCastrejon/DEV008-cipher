const cipher = {

  encode: (desplazamiento, texto) => {
    let resultado = "";
    const numDesplaza = Number(desplazamiento);
    if (typeof parseInt(desplazamiento) !== "number" || typeof texto !== "string") {
      throw new TypeError(
        "El texto tiene que ser un string y el desplazamiento un numero");
    } else {
      for (let i = 0; i < texto.length; i++) {
        let cifra = "";
        console.log(texto.charCodeAt(i) ==32);
        if ( texto.charCodeAt(i) == 32){
          cifra = " ";
          } else {
        const vuelta = (texto.charCodeAt(i) + numDesplaza - 65) % 26 + 65;
          cifra = String.fromCharCode(vuelta);
        console.log(cifra)
        }
        resultado += cifra

      }
      return resultado
    }

  },
  decode: (desplazamiento, texto) => {
    //console.log({texto})
    let resultado2 = "";
    const numDesplaza = Number(desplazamiento);
    if (typeof parseInt(desplazamiento) !== "number" || typeof texto !== "string") {
      throw new TypeError(
        "El texto tiene que ser un string y el desplazamiento un numero");
    } else {
      for (let i = 0; i < texto.length; i++) {
        let vuelta; 
        //console.log({i})
        if ( texto.charCodeAt(i) - desplazamiento +65>32){
          vuelta = " ";
        }
        if (texto.charCodeAt(i) - desplazamiento -65>0){
          vuelta = (texto.charCodeAt(i) - numDesplaza)
          console.log("Mayor que 0")
        }  
        if (((texto.charCodeAt(i) - desplazamiento - 65) %26)*-1  ===0){
          vuelta = 65;
          console.log("Igual a 0")
        }
        else if (texto.charCodeAt(i) - desplazamiento -65<=0){
          vuelta = (texto.charCodeAt(i) - numDesplaza - 65) % 26 + 65 +26;  
          console.log("Mayor que 0")
        } 
        const cifra = String.fromCharCode(vuelta);
        //console.log(cifra)
        resultado2 += cifra

      }
      return resultado2
    }

  }




}




export default cipher;

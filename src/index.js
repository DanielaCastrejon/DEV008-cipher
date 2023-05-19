import cipher from './cipher.js';


document.getElementById("mensaje").addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
  //console.log(this.value);
});

document.getElementById("cifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  const textoCifrado = document.getElementById("mensaje2");
  console.log(cipher.encode(desplazamiento, texto));
  textoCifrado.value = cipher.encode(desplazamiento, texto);




});

document.getElementById("descifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  //cipher.decode(texto, desplazamiento, textoCifrado);
  document.getElementById("mensaje2").value = cipher.decode(desplazamiento,texto);



})






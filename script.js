const botaoMostraPalavras = document.querySelector("#botao-palavrachave"); 

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() { 
  
 document.querySelector("#entrada-de-texto").value;

 const  palavrasChave = processaTexto(texto);

  
  const campoResultado = document.querySelector("#resultado-palavrachave");

  campoResultado.textContent = palavrasChave.join(", ");
} 
function processaTexto(texto) {

  let palavras = texto.split(/\P{L}+/u);

  return palavras;
}
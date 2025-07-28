const botaoMostraPalavras = document.querySelector("#botao-palavrachave"); 

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() { 
  const texto = document.querySelector("#entrada-de-texto").value;

  const palavras = texto.split(" ");

  const campoResultado = document.querySelector("#resultado-palavrachave");

  campoResultado.textContent = palavras.join(", ");
} 
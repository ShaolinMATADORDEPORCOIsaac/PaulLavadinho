const botão = document.getElementById("meubotao")
const texto = document.getElementById("meuTexto")

botão.addEventListener("click", function(){
    texto.classList.toggle("oculto");
});
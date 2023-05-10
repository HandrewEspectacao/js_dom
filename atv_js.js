//fazendo uma variavel para o botão de ligar
let ligar = document.getElementById("ligar")
//botao esta mudando a imagens
ligar.addEventListener("click", ()=>{
    document.getElementById("lampada").src = "imagens/pic_bulbon.gif"
})
//fazendo uma variavel para o botão desligar
let desligar = document.getElementById("off")
//botão para "desligar a lampada"
desligar.addEventListener("click", ()=>{
    document.getElementById("lampada").src = "imagens/pic_bulboff.gif"
})
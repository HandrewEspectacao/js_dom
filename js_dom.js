document.getElementById("exibir").innerHTML = "Hello World";
document.getElementById("exibir").style.color = "red";
let divExibir = document.getElementById("exibir");
divExibir.style.backgroundColor = "green";
let nome = window.prompt("seu nome");
document.getElementById("bemvindo").innerHTML = "Seja bem-vindo " + nome;
//getElements criando um array por tags
let paragrafos = document.getElementsByTagName('p')
paragrafos[0].innerHTML = "Eu sou o 1 paragrafo"
paragrafos[1].innerHTML = "Eu sou o 2 paragrafo"
paragrafos[2].innerHTML = "Eu sou o 3 paragrafo"
//criando uma variavel nova pelo js no html
let novo = document.createElement('div')
novo.innerHTML = "eu sou um novo elemento"
divExibir.appendChild(novo)
//linha de baixo remove um filho da div
divExibir.removeChild(divExibir.firstChild)
// fazendo a função do HOVER no js
function trocaCor(){
    document.getElementById("hover").style.backgroundColor = "green"
}
// se nao fizesse essa função, a cor ia continuar a mesma 
function voltaCor(){
    document.getElementById("hover").style.backgroundColor = "darkblue"
}
//fazendo o ONCLICK no js
let btnClick = document.getElementById("btnClick")
btnClick.addEventListener("click", ()=>{
    window.alert('Vc clicou')
})
//mudando a imagem pelo js 
document.getElementById("ney").src = "imagens/download.jfif"
//estudar RegExp// fazendo aceitação de caracteres, aceitanto somente letras, caso ao contrario exibi a cor de fundo vermelho
let inptNome = document.getElementById("nome")
inptNome.addEventListener("input", ()=>{
    if(inptNome.value.match(/\d/) || inptNome.value.match(/\W|_/)){
        inptNome.style.backgroundColor = "red"
    } else if(inptNome.value == ""){
        inptNome.style.backgroundColor = "initial"
    } else {
        inptNome.style.backgroundColor = "green"
    }
})
//fazendo um REQUIRED( required é enviar somente se o campo estiver preenchido corretamente) (famoso OBRIGATORIO)
let form1 = document.getElementById("form1")
form1.addEventListener("submit", (event)=>{
    if(inptNome.value ==""){
        window.alert("Campo obrigatorio vazio")
        event.preventDefault()
    }
})
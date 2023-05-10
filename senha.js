let olhinho = document.getElementById("password")//fiz uma variavel pro input pra poder fazer uma comparação no if
let revelar = document.getElementById("olhinho")// uma variavel para o boatão
revelar.addEventListener("click", ()=>{//adicinei um evento no botão
    if(olhinho.type == "password"){//se o tipo do olhinho for uma senha muda para texto
        document.getElementById("password").type = "text"
    }else {//se for texto volte para senha
        document.getElementById("password").type = "password"
    }
})
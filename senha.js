let olhinho = document.getElementById("password")
let revelar = document.getElementById("olhinho")
revelar.addEventListener("click", ()=>{
    if(olhinho.type == "password"){
        document.getElementById("password").type = "text"
    }else {
        document.getElementById("password").type = "password"
    }
})
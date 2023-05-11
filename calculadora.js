valor1 = document.getElementById("v1");
valor2 = document.getElementById("v2");
resultado = document.getElementById("res");
function soma(){
    resultado.innerHTML = `O resultado ${Number(valor1.value) + Number(valor2.value)} `
}
function sub(){
    resultado.innerHTML = `O resultado ${Number(valor1.value) - Number(valor2.value)} `
}
function mult(){
    resultado.innerHTML = `O resultado ${Number(valor1.value) * Number(valor2.value)} `
}
function div(){
    resultado.innerHTML = `O resultado ${Number(valor1.value) / Number(valor2.value)} `
}
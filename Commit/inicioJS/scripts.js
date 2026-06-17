const input = document.querySelector("input");
let mensagem = document.querySelector("#mensagem");
const select = document.querySelector("select");
const button = document.querySelector("#my-button");

function reg (register){
    console.log(register)
}
select.addEventListener("change", reg)

function DigiteiAqui () {
    console.log("Digitei no input!" + input.value);
}

function cliqueiNoBotao() {
    if (input.value !== "") {
        alert(input.value);
        const text = `Olá, ${input.value}! Seja bem-vindo ao DevClub!`;
        mensagem.innerHTML = text;
    }else{
        alert("Por favor, digite seu nome primeiro!");
    }
}

function registrar() {
}
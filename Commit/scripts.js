const input = document.querySelector("input");
let mensagem = document.querySelector("#mensagem");

function DigiteiAqui () {
    console.log("Digitei no input!");
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
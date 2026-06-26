const selectFrom = document.querySelectorAll("select")[0];
const selectTo = document.querySelectorAll("select")[1];
const valueInput = document.querySelector("input");
const button = document.querySelector("button");
let v1 = document.querySelectorAll(".value")[0];
let v2 = document.querySelectorAll(".value")[1];
let bandeira1 = document.querySelectorAll(".pais")[0];
let bandeira2 = document.querySelectorAll(".pais")[1];
let cf = document.querySelectorAll(".country")[0];
let ct = document.querySelectorAll(".country")[1];
let s1 = document.querySelectorAll("span")[0];
let s2 = document.querySelectorAll("span")[1];

const moeda = {
    "USD": 1.0,
    "BRL": 5.18,
    "EUR": 0.87,
    "GBP": 0.76,
    "BTC": 0.086
};

const sigla = {
    "USD": "US$",
    "BRL": "R$",
    "EUR": "€",
    "GBP": "£",
    "BTC": "₿"
};


button.addEventListener("click", () => {
    // Pega o valor exato que está no input naquele momento
    const valorDigitado = valueInput.value;

    // Condicional para validar se está vazio
    if (valorDigitado === "") {
        // Se estiver vazio, exibe o aviso
        alert("⚠️ É necessário adicionar algum valor para o cálculo!");
        v1.innerHTML = "";
        v2.innerHTML = "Error!";
    }
})
selectFrom.addEventListener("change", selecionar);
selectTo.addEventListener("change", selecionar);

function selecionar() {

    bandeira1.src = `./archives/${selectFrom.value}.png`;
    bandeira2.src = `./archives/${selectTo.value}.png`;

    cf.innerHTML = selectFrom.options[selectFrom.selectedIndex].text;
    ct.innerHTML = selectTo.options[selectTo.selectedIndex].text;

    s1.innerHTML = `${sigla[selectFrom.value]}`; 
    s2.innerHTML = `${sigla[selectTo.value]}`;

    converter()
}


function converter() {
    const x = moeda[selectTo.value] / moeda[selectFrom.value] * parseFloat(valueInput.value);
    
    console.log(`${valueInput.value} ${selectFrom.value} é igual a ${x.toFixed(2)} ${selectTo.value}`);

    v1.innerHTML = `${sigla[selectFrom.value]} ${parseFloat(valueInput.value).toFixed(2)}`; 
    v2.innerHTML = `${sigla[selectTo.value]} ${x.toFixed(2)}`;
}
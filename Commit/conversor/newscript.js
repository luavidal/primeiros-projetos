const convertButton = document.querySelector("button"); //cria uma variável de link com o botão do html
const currecySelect1 = document.querySelectorAll("select")[0];
const currecySelect2 = document.querySelectorAll("select")[1];

currecySelect1.addEventListener("change", changeCurrency);
currecySelect2.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues); //cria evento de reconhecimento de click e chama a função converterValues

function convertValues() {
    const input = document.querySelector("input").value; //cria uma variável de link com o valor (value) do input
    const currencyValueToConvert = document.querySelectorAll(".value")[0]; //cria uma variável de link com o valor do 1º valor no html
    const currencyValueToConverted = document.querySelectorAll(".value")[1]; //cria uma variável de link com o valor do 2º valor no html

    console.log(currecySelect1.value);

    const dolarToDay = 5.2;
    const euroToDay = 6.2;


    if (currecySelect2.value == "USD") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarToDay);
    }

    if (currecySelect2.value == "EUR") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroToDay);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input);

}

function changeCurrency() {
    const currencyCountry = document.querySelectorAll(".country")[1];
    const currencyImage = document.querySelectorAll(".pais")[1];

    if (currecySelect2.value == "USD") {
        currencyCountry.innerHTML = "Dólar Americano"
        currencyImage.src = "./archives/USD.png"
    }

    if (currecySelect2.value == "EUR") {
        currencyCountry.innerHTML = "Euro"
        currencyImage.src = "./archives/EUR.png"
    }

    convertValues()

}

addEventListener("keydown", function (event) {
    if (event.key === "enter") {
        generateNumber()
    }
});

function generateNumber() {
    const min = Math.ceil(document.querySelectorAll('input')[0].value);
    const max = Math.floor(document.querySelectorAll('input')[1].value);

    if (max >= min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result);
    } else {
        alert(`${max} é menor do que ${min}: Altere a ordem dos valores!`)
    }


    //console.log(min, max)
}


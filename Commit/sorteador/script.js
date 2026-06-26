
addEventListener("keydown", function (event){
    if(event.key === "enter"){
        generateNumber()
    }
});

function generateNumber() {
    const min = Math.ceil(document.querySelectorAll('input')[0].value);
    const max = Math.floor(document.querySelectorAll('input')[1].value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);

    //console.log(min, max)
}
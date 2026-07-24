const cart = [10, 244, 99, 2, 20, 33, 250];
let value = 0;
let desc = 0;
let discValue = 0;

const discount = (price, discount) => (price * discount) / 100
/*
Alinha acima representa a mesma coisa que a função abaixo:

function discount(price, discount){
    const result = (price * discount) / 100
    return result
} */

cart.forEach(element => {
    const d = discount(element, 10);
    if(element > 30){
        discValue += element - d;
        value += element;
        desc += d;
    }else{
        discValue += element
        value += element
    }
});


console.log(value.toFixed(2));
console.log(desc.toFixed(2));
console.log(discValue.toFixed(2));









/* function valorDesc() {
    let desconto = 0;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i] > 30) {
            desconto = desconto + (cart[i] * 0.1);
        }
    }
    return desconto;
}


function total() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total = total + cart[i];
        }

        total = total - valorDesc();

        return total;
    }

    let sDesc = total() + valorDesc();

    console.log(`O valor total ficou R$ ${sDesc.toFixed(2)},
Você teve R$ ${valorDesc().toFixed(2)} de desconto.
Você pargará apenas ${total().toFixed(2)}`); */
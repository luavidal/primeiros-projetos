const list = document.querySelector('ul');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const p2 = document.querySelectorAll('.p2');
let myLi = '';
let operation


function showAll() {
    myLi = ''
    menuOptions.forEach(products => {
        myLi += `
            <li class="all">
                <img src=${products.src}>
                <p class='p1'>${products.name}</p>
                <p class='p2'>${products.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
`
    })

    list.innerHTML = myLi
    operation = 1
}

const menuComDesconto = menuOptions.map(p => {
    return {
        name: p.name,
        price: p.price,
        vegan: p.vegan,
        src: p.src,
        priceDiscount: p.price * .85,
    }
})

function desc() {
    myLi = ''
    menuComDesconto.forEach(products => {
        myLi += `
            <li class="desc">
                <img src=${products.src}>
                <p class='p1'>${products.name}</p>
                <p class='p2'>${(products.priceDiscount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
        `
    })

    list.innerHTML = myLi
    operation = 2
}

function veganFilter() {
    const x = menuOptions.filter(p => p.vegan)
    const y = menuComDesconto.filter(p => p.vegan)
    myLi = ''

    if (operation === 1) {
        x.forEach(products => {
            myLi += `
            <li class="desc">
                <img src=${products.src}>
                <p class='p1'>${products.name}</p>
                <p class='p2'>${(products.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
        `
        })
        list.innerHTML = myLi
        operation = 3
    } else if (operation === 2) {
        y.forEach(products => {
            myLi += `
            <li class="desc">
                <img src=${products.src}>
                <p class='p1'>${products.name}</p>
                <p class='p2'>${(products.priceDiscount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
        `
        })
        list.innerHTML = myLi
        operation = 4
    }

}


function totalPrint() {
    let valor
    if (operation === 1) {
        valor = menuOptions.reduce((acc, tt) => {
            return acc += tt.price
        }, 0)

        list.innerHTML = `
    <li>
    <p class="p1">
    O valor total
    do seu pedido é
    </p>

    <p class="p2">
    ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
    </li>
    `
    } else if (operation === 2) {
        valor = menuComDesconto.reduce((acc, tt) => {
            return acc += tt.priceDiscount
        }, 0)

        list.innerHTML = `
    <li>
    <p class="p1">
    O valor total
    do seu pedido é
    </p>

    <p class="p2">
    ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
    </li>
    `
    } else if (operation === 3) {
        valor = menuOptions.filter(tt => tt.vegan).reduce((acc, tt) => {
            return acc += tt.price
        }, 0)
        

        list.innerHTML = `
    <li>
    <p class="p1">
    O valor total
    do seu pedido é
    </p>

    <p class="p2">
    ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
    </li>
    `
    } else if (operation === 4) {
        valor = menuComDesconto.filter(tt => tt.vegan).reduce((acc, tt) => {
            return acc += tt.priceDiscount
        }, 0)

        list.innerHTML = `
    <li>
    <p class="p1">
    O valor total
    do seu pedido é
    </p>

    <p class="p2">
    ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
    </li>
    `
    }
    console.log(valor)
}



b1.addEventListener('click', showAll)
b2.addEventListener('click', desc)
b3.addEventListener('click', totalPrint)
b4.addEventListener('click', veganFilter)

//---------------------------------------------------------------------------

/* const list = document.querySelector('ul');
const btnShowAll = document.querySelector('#b1');
const btnMapDiscount = document.querySelector('#b2');
const btnSumAll = document.querySelector('#b3');
const btnFilterVegan = document.querySelector('#b4');

// Variável de estado para guardar qual lista está aparecendo na tela no momento
let currentItems = []; 

// 💡 Helper: Função separada apenas para formatar o dinheiro (evita repetição)
const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 💡 Helper: ÚNICA função responsável por desenhar a lista na tela
function renderItems(itemsArray) {
    currentItems = itemsArray; // Atualiza a memória do que está na tela
    let myLi = '';

    itemsArray.forEach(product => {
        myLi += `
            <li class="item">
                <img src="${product.src}">
                <p class="item-name">${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `;
    });

    list.innerHTML = myLi;
}

// 1. Mostrar Todos
function showAll() {
    renderItems(menuOptions);
}

// 2. Mapear Descontos
function applyDiscount() {
    const discountedMenu = menuOptions.map(product => ({
        ...product, // Copia todos os dados do produto (nome, vegano, imagem)
        price: product.price * 0.85 // Substitui apenas o valor do preço
    }));
    
    renderItems(discountedMenu);
}

// 3. Filtrar Veganos
function filterVegan() {
    // 🔥 Dica Pro: Filtramos o 'currentItems' (o que já está na tela).
    // Assim, se o desconto já estiver aplicado, ele filtra os veganos COM desconto!
    const veganMenu = currentItems.filter(product => product.vegan);
    renderItems(veganMenu);
}

// 4. Somar Tudo
function sumTotal() {
    // Faz a soma em cima do que estiver na tela no momento
    const totalValue = currentItems.reduce((acc, product) => acc + product.price, 0);

    list.innerHTML = `
        <li>
            <p class="item-name">O valor total do seu pedido é</p>
            <p class="item-price">${formatCurrency(totalValue)}</p>
        </li>
    `;
}

// Ouvidores de Eventos
btnShowAll.addEventListener('click', showAll);
btnMapDiscount.addEventListener('click', applyDiscount);
btnSumAll.addEventListener('click', sumTotal);
btnFilterVegan.addEventListener('click', filterVegan); */

// EXERCÍCIO 01
const numArray = [73, 20, 1, 600, 39, 105, 93, 13, 95, 12];

document.getElementById('num').innerText = numArray.join(', ');

numArray.sort(function(a, b){return a - b;});

document.getElementById('sorted-num').innerText = numArray.join(', ');



// EXERCÍCIO 02
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function evenNum() {
    for(i in numArr) { 
        if (numArr[i] % 2 == 0) { 
            console.log(`Número par ${numArr[i]} com index ${i}`); 
        }
    }
}



// EXERCÍCIO 03
const randomNumArray = Array.from({length: 8}, () => (Math.random() * 50).toFixed(1));
// Referenciei esse método de criar um array com números aleatórios pelo StackOverflow, aqui: https://stackoverflow.com/questions/5836833/create-an-array-with-random-values

document.getElementById('random-num').innerText = randomNumArray.join(', ');

randomNumArray[0] = (Math.random() * 50).toFixed(1);
randomNumArray[2] = (Math.random() * 50).toFixed(1);
randomNumArray[5] = (Math.random() * 50).toFixed(1);

document.getElementById('changed-num').innerText = randomNumArray.join(', ');



// EXERCÍCIO 04
const items = ['Ouro', 'Prata', 'Madeira', 'Pedra']
const darkAge = Array.from({length: 4}, () => Math.floor(Math.random() * 1000));
const castleAge = Array.from({length: 4}, () => Math.floor(Math.random() * 1000));

function darkAgeItems() {

    for(let i = 0; i < items.length; i++) {
        document.getElementById('inventory1').innerText += `${items[i]} → ${darkAge[i]} sacas \n`;
    }

    const darkAgeTotal = darkAge.reduce((itemSum, a) => itemSum + a, 0);
    // Referenciei esse método de somar o array pelo StackOverflow, aqui: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

    document.getElementById('inventory1-total').innerText = `\n4 tipos de itens, com um total de ${darkAgeTotal} sacas.`;
};

function castleAgeItems() {

    for(let i = 0; i < items.length; i++) {
        document.getElementById('inventory2').innerText += `${items[i]} → ${castleAge[i]} sacas \n`;
    }

    const castleAgeTotal = castleAge.reduce((itemSum, a) => itemSum + a, 0);

    document.getElementById('inventory2-total').innerText = `\n4 tipos de itens, com um total de ${castleAgeTotal} sacas.`;
};

darkAgeItems();
castleAgeItems();



// EXERCÍCIO 05
const cheeses = ['Mussarela', 'Minas', 'Parmesão', 'Prato', 'Gorgonzola'];

document.getElementById('cheese-menu').innerText = cheeses.join(', ');

cheeses.push('Mascarpone', 'Ricota', 'Provolone');

document.getElementById('cheese-menu2').innerText = cheeses.join(', ');

cheeses.sort()

document.getElementById('cheese-menu3').innerText = cheeses.join(', ');

cheeses.splice(0, 0, 'Cottage');

document.getElementById('cheese-menu4').innerText = cheeses.join(', ');



// EXERCÍCIO 06
const bookCatalog =  [
    {id: '01', category: 'Terror', title: 'It'},
    {id: '02', category: 'Terror', title: 'O Exorcista'},
    {id: '03', category: 'Terror', title: 'Drácula'},
    {id: '04', category: 'Romance', title: 'O Morro dos Ventos Uivantes'},
    {id: '05', category: 'Policial', title: 'O Silêncio dos Inocentes'},
    {id: '06', category: 'Suspense', title: 'Boneco de Neve'},
    {id: '07', category: 'Suspense', title: 'Bird Box'},
    {id: '08', category: 'Romance', title: 'Orgulho e Preconceito'}
];

// Referenciei a documentação do método map no MDN
const bookTitle = bookCatalog.map(book => book.title);

document.getElementById('books').innerText = bookTitle.join('\n');

// Referenciei a documentação do método filter no MDN
// E um amigo me deu a dica da formatação da const abaixo
const horrorBookTitle = bookCatalog
    .filter(book => book.category == 'Terror')
    .map(book => book.title);

document.getElementById('horror-books').innerText = horrorBookTitle.join('\n');



// EXERCÍCIO 07
const medals = ['Ouro', 'Prata', 'Bronze'];
const positionList = document.getElementById('positions')

function giveMedals() {
    const positions = [1, 2, 3, 4, 5];

    positions.forEach((position, i) => {
        if (position == 4 || position == 5) {
            positionList.innerText += `${position}º lugar --> Sem medalha \n \n`;
        } else {
            positionList.innerText += `${position}º lugar --> Medalha de ${medals[i]} \n \n`;
        }
    });
};

giveMedals();



// EXERCÍCIO 08
const setA = ['2', '4', '6', '7', '8', '22', '45', '34', '89', '75', '62', '54'];
const setB = ['22', '23', '57', '45', '77', '62', '56', '54', '97', '88', '33', '5'];

document.getElementById('set-a').innerText = `A = {${setA.join(', ')}}`;
document.getElementById('set-b').innerText = `B = {${setB.join(', ')}}`;

// Referenciei os métodos de tratar conjuntos por esse artigo https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848

const setsUnion = [...setA, ...setB].sort(function(a, b){return a - b;});

document.getElementById('sets-union').innerText = `A + B = {${setsUnion.join(', ')}}`;

const setsIntersection = setA.filter(x => setB.includes(x)).sort(function(a, b){return a - b;});

document.getElementById('sets-intersection').innerText = `A ∩ B = {${setsIntersection.join(', ')}}`;

const setsDifference = setB.filter(x => !setA.includes(x)).sort(function(a, b){return a - b;});
// Eu achei que a sra. queria uma diferença simétrica porém após examinar o código eu percebi que na realidade era B - A, então fiz assim

document.getElementById('sets-difference').innerText = `B - A = {${setsDifference.join(', ')}}`;



// EXERCÍCIO 09
const pizzeria = [
    {
        clientName: 'Alberto',
        drink: 'Suco',
        pizza: 'Pizza de Calabresa'
    },
    {
        clientName: 'Crista',
        drink: 'Cerveja',
        pizza: 'Pizza de Atum'
    },
    {
        clientName: 'Marge',
        drink: 'Suco',
        pizza: 'Pizza de Mussarela'
    },
    {
        clientName: 'Lena',
        drink: 'Refrigerante',
        pizza: 'Pizza de Strogonoff'
    },
    {
        clientName: 'Luke',
        drink: 'Cerveja',
        pizza: 'Pizza de Calabresa'
    },
    {
        clientName: 'Vágio',
        drink: 'Suco',
        pizza: 'Pizza de Chocolate'
    },
    {
        clientName: 'Pedro',
        drink: 'Cerveja',
        pizza: 'Pizza de Quatro Queijos'
    },
    {
        clientName: 'Larissa',
        drink: 'Refrigerante',
        pizza: 'Pizza de Calabresa'
    }
]

const pizzaOrders = pizzeria.map(order => order.pizza);

const pizzaOrdersCount = pizzaOrders.length;

document.getElementById('pizza-orders').innerText = pizzaOrders.join('\n');

document.getElementById('pizza-count').innerText = `( ${pizzaOrdersCount} )`;

const sodaOrders = pizzeria
    .filter(order => order.drink == 'Refrigerante')
    .map(order => order.clientName);

const sodaOrdersCount = sodaOrders.length;

document.getElementById('soda-orders').innerText = sodaOrders.join('\n');

document.getElementById('soda-count').innerText = `( ${sodaOrdersCount} )`;

const juiceOrders = pizzeria
    .filter(order => order.drink == 'Suco')
    .map(order => order.clientName);

const juiceOrdersCount = juiceOrders.length;

document.getElementById('juice-orders').innerText = juiceOrders.join('\n');

document.getElementById('juice-count').innerText = `( ${juiceOrdersCount} )`;

const beerOrders = pizzeria
    .filter(order => order.drink == 'Cerveja')
    .map(order => order.clientName);

const beerOrdersCount = beerOrders.length;

document.getElementById('beer-orders').innerText = beerOrders.join('\n');

document.getElementById('beer-count').innerText = `( ${beerOrdersCount} )`;



// EXERCÍCIO 10
const purchases = [
    {itemName: 'Perfume', itemPrice: 1236.99},
    {itemName: 'Brinco', itemPrice: 134.28},
    {itemName: 'Gravata', itemPrice: 189.99},
    {itemName: 'Sapato', itemPrice: 899.99},
    {itemName: 'Casaco', itemPrice: 2568.78},
    {itemName: 'Terno', itemPrice: 3566.99},
    {itemName: 'Vestido', itemPrice: 4896.99},
]

const itemsPurchased = purchases.map(item => item.itemName);

document.getElementById('items-purchased').innerHTML = `Samanta comprou os seguintes itens: <span class="text-info fw-semibold">${itemsPurchased.join(', ')}.</span>`;

// Referenciei o método de somar propriedades de um objeto dentro de um array aqui: https://bobbyhadz.com/blog/javascript-get-sum-of-array-object-values#:~:text=To%20sum%20a%20property%20in,values%20for%20the%20specific%20property.
const sumPurchases = purchases.reduce((price, object) => {
    return price + object.itemPrice;
}, 0);

document.getElementById('purchases-sum').innerHTML = `Dando um valor total de: <span class="text-info fw-semibold">R$${sumPurchases}</span>`;
// Exercício 01
async function textPrompt() {
    setTimeout(function () {
        window.alert('Sua conexão falhou! Tente se conectar novamente!')
    }, 3000)
}


// Exercício 02
let timeInterval

function showTime() {
    let date = new Date();
    let currentTime = date.toLocaleTimeString('pt-BR', { minute: '2-digit', hour: '2-digit', second: '2-digit' })

    document.getElementById('hours').innerText = currentTime;
}

function startClock() {
    setTimeout(function () {
        if (!timeInterval) {
            timeInterval = setInterval(showTime, 1000)
        }
    }, 2000)
}

function clearTime() {
    clearInterval(timeInterval)
    document.getElementById('hours').innerText = ''
}


// Exercício 03
let colorInterval

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
// Aprendi sobre esse método de gerar cores aleatórios pelo StackOverflow, aqui: https://stackoverflow.com/questions/1484506/random-color-generator

function changeColor() {
    if (!colorInterval) {
        colors();
        colorInterval = setInterval(colors, 2000);
    }
}

function colors() {
    let selectedColor = getRandomColor();

    document.getElementById('placeholder').innerText = '';
    document.getElementById('colors').style.backgroundColor = selectedColor;
}

function stopColors() {
    clearInterval(colorInterval);
    colorInterval = null;
}
// Referenciei na documentação (MDN) o método de parar o intervalo


// Exercício 04
let nameDisplay = document.getElementById('name-display');
let sortSpeed = document.getElementById('sort-speed');
let sortTimeout = document.getElementById('sort-timeout');
let errMsg = document.getElementById('err-msg');
let sortInterval;
let randomNames = ['Annabelle', 'Polenta', 'Laurie Strode', 'Michael Myers', 'Mayra', 'Ripley', 'Sidney Prescott', 'Norman Bates', 'Ada', 'Hannibal Lecter', 'Cristina', 'Lovelace', 'Jack Torrance', 'Freddy Krueger', 'Enzo', 'Valentina', 'Jason', 'Michael Myers', 'Itadori', 'Carrie', 'Candyman', 'John Kramer'];

function getRandomName() {
    let name = randomNames[Math.floor(Math.random() * randomNames.length)];

    nameDisplay.value = name;
}

function startSort() {
    nameDisplay.value = '';
    nameDisplay.classList.remove('fw-bold');

    try {
        if (!sortSpeed.value || !sortTimeout.value) throw 'Por favor, preencha todos os campos.';
        if (isNaN(sortSpeed.value) || isNaN(sortTimeout.value)) throw 'Valor inválido, por favor insira um número.';
        if (parseInt(sortSpeed.value) > parseInt(sortTimeout.value)) throw 'Digite uma velocidade menor do que o tempo.';

        if (!sortInterval) {
            sortInterval = setInterval(getRandomName, parseInt(sortSpeed.value));

            setTimeout (stopSort, parseInt(sortTimeout.value));
        }
    } catch(error) {
        errMsg.innerText = error;
    }
}

function stopSort() {
    clearInterval(sortInterval);
    sortInterval = null;
    
    nameDisplay.classList.add('fw-bold');
}


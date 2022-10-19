// Exercício 01
function changeText () {
    let texts = ['O monte Everest cresce 4 milímetros por ano', 
    'Vacas não conseguem descer escadas',
    '10% da população mundial é canhota',
    'O Brasil é o quinto maior país do mundo',
    'A avenida mais larga do mundo fica na Argentina',
    'A parte mais profunda do oceano chega a 11 mil metros',
    'O corpo humano tem mais de 96 mil km de vasos sanguíneos',
    'O recorde de voo de uma galinha é de 13 segundos',
    'A língua de uma baleia-azul pode pesar até 3,6 toneladas',
    'As borboletas têm cerca de 12 mil olhos'];
    let text = texts[Math.floor(Math.random() * texts.length)];

    document.getElementById('change-text').innerText = text;
}


// Exercício 02
const colorPicker = document.getElementById('color-picker');
const coloredText = document.getElementById('text-color');
colorPicker.addEventListener('input', colorChange);

function colorChange (event) {
    document.getElementById('text-color').style = `color: ${event.target.value}`;
}

function clickOnText(event) {
    colorPicker.click();
}


// Exercício 03
const counter = document.getElementById('counter');

function counterAdd() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function counterReset() {
    counter.innerText = '0';
}


// Exercício 04
function grayScale() {
    document.getElementById('image').style.filter = 'grayscale(100)';
}

function sepia() {
    document.getElementById('image').style.filter = 'sepia(100)';
}

function resetFilter() {
    document.getElementById('image').style.filter = 'none';
}


// Exercício 05
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');
const sign = document.getElementById('sign');
const result1 = document.getElementById('result-calc-1');

function calculate1() {
    if(isNaN(num1.value) || isNaN(num2.value)) return;
    if(sign.value.length > 1) return;

    result1.innerHTML = `Resultado = <span class="fw-bold">${eval(num1.value+sign.value+num2.value)}</span>`;
}

function calcReset() {
    num1.value = '';
    num2.value = '';
    sign.value = 'none';
    result1.innerText = "Resultado = ";
}


// Exercício 06
let equation = '';
const equationDisplay = document.getElementById('equation');
const doneEquationDisplay = document.getElementById('done-equation');

function calcInput(char) {
    if (char == '') {
        equation = '';
        doneEquationDisplay.innerText = '';
    } 

    const lastChar = equation.charAt(equation.length-1);

    if (isNaN(lastChar) && isNaN(char)) {
        equation = equation.slice(0, -1);
        equation += char;
    }
    else equation += char;
    equationDisplay.style.visibility = 'visible';
    equationDisplay.innerText = equation;
}

function calculate2() {
    const lastChar = equation.charAt(equation.length-1);

    if (isNaN(lastChar)) return;

    equationDisplay.style.visibility = 'visible'
    equationDisplay.innerText = '= ' + eval(equation);

    doneEquationDisplay.style.visibility = 'visible';
    doneEquationDisplay.innerText = equation;

    equation = '';
}

function backspace() {
    equation = equation.slice(0, -1);

    equationDisplay.innerText = equation;
}
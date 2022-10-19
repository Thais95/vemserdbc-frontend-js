// Exercício 01
function changeText () {
    document.getElementById('change-text').innerText='Olha, o texto mudou mesmo!'
}


// Exercício 02
const colorPicker = document.getElementById('color-picker');
const coloredText = document.getElementById('text-color');

colorPicker.addEventListener('change', colorChange);

function colorChange (event) {
    document.getElementById('text-color').style = `color: ${event.target.value}`;
}

function cliqueNoTexto(event) {
    colorPicker.click();
}


// Exercício 05
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');
const sign = document.getElementById('sign');
const result1 = document.getElementById('result-calc-1');

function calculate1() {
    if(isNaN(num1.value) || isNaN(num2.value)) return;
    if(sign.value.length > 1) return

    result1.innerHTML = `Resultado = <span class="fw-bold">${eval(num1.value+sign.value+num2.value)}</span>`;
}

function reset1() {
    num1.value = '';
    num2.value = '';
    sign.value = 'none';
    result1.innerText = "Resultado = "
}


// Exercício 06
let equation = '';
const equationDisplay = document.getElementById('equation');

function calcInput(char) {
    if (!char) equation = '';

    const lastChar = equation.charAt(equation.length-1);

    if (isNaN(lastChar) && isNaN(char)) {
        equation = equation.slice(0, -1);
        equation += char;
    }
    else equation += char;
    equationDisplay.innerText = equation;
}

function calculate2() {
    const lastChar = equation.charAt(equation.length-1);

    if (isNaN(lastChar)) return;

    equationDisplay.innerText = '= ' + eval(equation);
    equation = '';
}
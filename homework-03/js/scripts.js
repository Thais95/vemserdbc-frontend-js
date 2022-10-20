// Exercício 01

function calcAverage() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    
    document.getElementById('average-result').style.visibility = 'visible';

    if (Math.max(grade1, grade2, grade3) > 10) {
        return document.getElementById('average-result').innerText = `Por favor, insira apenas notas de 1 à 10!`;
    } else if (!grade1 || !grade2 || !grade3) {
        return document.getElementById('average-result').innerText = `Por favor, insira notas válidas!`;
    }

    const media = ((grade1 + grade2 + grade3) / 3).toFixed(1);

    if (media < 5) {
        return document.getElementById('average-result').innerText = `Sua média é ${media}. \n Você foi reprovado.`;
    } else if (media >= 5 && media < 7) {
        return document.getElementById('average-result').innerText = `Sua média é ${media}. \n Você está de recuperação.`;
    } else {
        return document.getElementById('average-result').innerText = `Sua média é ${media}. \n Você foi aprovado, parabéns! 🥳`;
    }
}


// Exercício 02
function calcSum(maxNum) {
    let sum = 0;

    for (let num = 0; num <= maxNum; num+=2) {
        sum += num;
    }
    return sum;
}

function showSum(maxNum) {
    let sum = calcSum(maxNum);
    
    document.getElementById('sum-result').style.visibility = 'visible';
    document.getElementById('sum-result').innerText = `A soma dá ${sum}`;
}


// Exercício 03
function clock(time) {
    for (let i = 1; i <= time; i++) {
        setTimeout(() => {
          console.log(`${i} segundo${ i > 1 ? 's' : '' }.`);
        }, i * 1000);
      }
}


// Exercício 04
function menu() {
    let opt = "";
    
    while(true){
        opt = prompt("Bem-vindo \n\n 1) Fazer checkin \n 2) Fazer checkout \n 3) Estender hospedagem \n 4) Sair \n\n Digite a opção desejada:");

        switch(opt) {
            case '1':
                return alert('Checkin feito com sucesso, seja bem-vindo.');

            case '2':
                const confirmChoice = confirm('Você tem certeza?');
                if (confirmChoice) return alert('Checkout feito com sucesso, até mais.');
                break;

            case '3':
                const days = parseInt(prompt('Por quantos dias gostaria de estender a hospedagem?'));
                if (days > 0) return alert(`Hospedagem estendida por ${days} dia${days > 1 ? 's' : ''} :D`);
                else alert('Número de dias inválido.');
                break;

            case '4':
                return alert('Ok.')

            case null:
                return alert('Saindo do menu.')

            default:
                alert ('Opção inválida.');
                break;
        }
    }
}


// Exercício 05
function carbon() {
    const substance1 = parseInt(prompt('Digite a quantidade de carbono da primeira substância:'));
    const substance2 = parseInt(prompt('Digite a quantidade de carbono da segunda substância:'));

    if (isNaN(substance1) || isNaN(substance2)) 
        return alert('Quantidade inválida de carbono.');
    
    if (substance1 == substance2 + 2) alert('Quantidade igual.')
    else alert('Quantidade diferente.')    
}


// Exercício 06
function whileCount() {
    let count = 1;

    while (count <= 100) {
        if (count % 2 == 0) console.log(count);
        count ++;
    }

    console.log('FIM.');
}


// Exercício 07
function getAge() {
    let age = parseInt(prompt('Digite sua idade:'));

    while (isNaN(age)) {
        age = parseInt(prompt('Digite sua idade:'));
    }

    alert(age);
}


// Exercício 08
function wageRaisePercentage() {
    const startingYear = 2013;
    const startingWage = 1000.0;
    let previousWage = 1000.0;
    let currentWage = 1000.0;

    for (let currentYear = startingYear; currentYear <= 2022; currentYear++){
        const raise = ((currentWage-previousWage)/currentWage)*100;

        console.log(`${currentYear} - R$${currentWage.toFixed(1)} - Aumento de ${raise.toFixed(1)}%`);

        previousWage = currentWage;

        if(currentYear < 2017) currentWage = currentWage * 1.015;
        else currentWage = currentWage * 1.03;
        
        currentWage = currentWage;
    }

    const totalRaise = ((currentWage-startingWage)/currentWage)*100;
    console.log(`Aumento relativo ao salário inicial: ${totalRaise.toFixed(1)}%`)
}


// Exercício 09
function fibonacci() {
    let n1 = 0;
    let n2 = 1;
    let aux;

    for(let i = 0; i < 20; i++) {
        console.log(n1);

        aux = n1+n2;
        n1 = n2;
        n2 = aux;
    }
}
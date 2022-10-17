// Cálculo de Índice de Massa Corporal (IMC)
function calcularImc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value/100;

    const IMC = peso / (altura * 2);

    document.getElementById('resultado-imc').innerText = `Seu IMC é ${IMC.toPrecision(3)}`;
}


// Cálculo de média
function calcularMedia() {
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    const media = (nota1 + nota2 + nota3) / 3;

    document.getElementById('resultado-media').innerText = `Sua média é ${Math.round(media)}`;
}


// Conversor de Celsius para Fahrenheit
function converterTemperatura() {
    const celsius = parseInt(document.getElementById('celsius').value);

    const fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById('resultado-conversao').innerText = `${fahrenheit} Fº`;
}


// Checar se o aluno passou de ano
function passouDeAno() {
    let media = parseInt(document.getElementById('media-aluno').value);
    
    media = media > 10 ? media / 10 : media

    document.getElementById('resultado-passou').innerText = media >= 7 ? 'Parabéns, você passou de ano 🥳':'Você foi reprovado 😭';
}
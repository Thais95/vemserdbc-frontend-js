const n1 = parseInt(prompt('Digite um número:'));
const n2 = parseInt(prompt('Digite um segundo número:'));
const op = prompt('Digite a operação: ');
resultado = '';

if (isNaN(n1) || isNaN(n2)) {
    alert('Número inválido')
} else {
    if (op == '*') {
        resultado = `Resultado foi: ${n1*n2}`
    }
    else if (op == '/') {
        if (n2 == 0) resultado = 'Erro, divisão por zero.'
        else resultado = `Resultado foi: ${n1/n2}`
    }
    else if (op == '+') {
        resultado = `Resultado foi: ${n1+n2}`
    }
    else if (op == '-') {
        resultado = `Resultado foi: ${n1-n2}`
    } else {
        resulto = 'Sinal inválido'
    }
}

alert(resultado);
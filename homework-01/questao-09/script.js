function calcularDiferença(idade1, idade2) {
    return idade1-idade2;
}

const idade1 = prompt('Qual a sua idade? ');
const idade2 = prompt('Qual a idade do seu(sua) irmão(irmã)?');
alert(`Nossa diferença de idade é: ${calcularDiferença(idade1, idade2)} anos.`);
function calcularSoma() {
    const numero1 = parseInt(document.getElementById('numero-1').value);
    const numero2 = parseInt(document.getElementById('numero-2').value);

    let resultado = numero1 + numero2

    document.getElementById('resultado').innerText = resultado;
}
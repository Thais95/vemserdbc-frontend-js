function escreveTexto(escrita) {
    const texto = document.getElementById('texto');

    texto.innerText += `*************************************************\n${escrita}\n`;
}

escreveTexto('BEM VINDO AO MEU PROGRAMA')
escreveTexto('ELE REALMENTE FUNCIONA')
escreveTexto('EU USEI FUNÇÃO PARA FAZER ISSO')
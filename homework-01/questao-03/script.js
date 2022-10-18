let resposta = prompt('Digite SIM ou NÃO').toLowerCase();
let retorno = '';

retorno = resposta == 'sim' ? retorno = 'Parabéns' 
        : resposta == 'não' ? retorno = prompt('Digite um texto: ')
        : retorno = 'Você tem noção dos seus atos?';

alert(retorno);
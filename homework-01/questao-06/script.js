const ano = 2020;

bissexto = ano % 400 == 0 ? true : ((ano % 4 == 0) && (ano %100 != 0));

alert(`O ano ${ano} é bissexto? ${bissexto ? 'Sim':'Não'}`);
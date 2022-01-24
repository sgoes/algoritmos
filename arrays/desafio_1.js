const data = {
    dia: 27,
    mes: 03,
    ano: 1991,
    exibir: function() { //um objeto com uma funçao 
        return `${data.dia}/${data.mes}/${data.ano}`;
    }
};

console.log(data.exibir());
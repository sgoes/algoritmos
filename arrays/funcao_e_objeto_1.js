//de forma a evitar a repetição de objetos é possivel que atraves de uma uma função evitar esta redundância 

function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() { //tambem posso declarar a função na seguinte forma --> exibir(){} , ou seja, posso retirar o ": function", é uma simplificação
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(09, 10, 2010);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(27, 03, 1991);

console.log(d1.exibir(), d2.exibir(), d3.exibir());
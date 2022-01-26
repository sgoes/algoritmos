//vamos supor que quero três datas diferentes, esta forma literal de construir objetos não é mais recomendada, dada à repetição
const d1 = {
    dia: 09,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 22,
    mes: 11,
    ano: 2023,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia: 27,
    mes: 03,
    ano: 1991,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
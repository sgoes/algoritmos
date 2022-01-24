const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
};

console.log(data.dia);
console.log(data.mes);
console.log(data.ano);

data.dia = 27;
data.mes = 12;

console.log(`${data.dia}/${data.mes}/${data.ano}`);

//data é uma constante não para alterar as variaveis, dá apenas para modificar os atributos internos de um objeto
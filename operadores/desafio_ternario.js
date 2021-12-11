const a = 8;
const b = 4;
const operacao = '+'; // + - * /   ir alterando


const resultado =
    operacao === '+' ? a + b :
    operacao === '-' ? a - b :
    operacao === '*' ? a * b : a / b; //reparar que so esta ultima é que tem expressa as duas opçoes 
console.log(resultado);
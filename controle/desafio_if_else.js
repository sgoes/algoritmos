const a = 10;
const b = 20;
const operacao = '/'; // + - * / %

let resultado


if (operacao === '*') {
    resultado = a * b;
} else if (operacao === '+') {
    resultado = a + b;
} else if (operacao === '-') {
    resultado = b - a;
} else if (operacao === '/') {
    resultado = a / b;
} else {
    resultado = b % a;
}

console.log(resultado)
function executar(fn, n1 = 10, n2 = 20) { //temos aqui três parâmetros, em que o primeiro parametro é uma funcao e os outros dois são as variaveis
    if (typeof fn === 'function') {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}


function bomDia() {
    return "Bom dia!!";
}

function subtrair(a, b) {
    return a - b;
}


function multiplicar(a, b) {
    return a * b;
}

executar(somar, 38, 32); //como chamar a função
console.log(bomDia());
executar(bomDia);
executar(subtrair, 30, 28);
executar(multiplicar, 50, 40);
executar(somar); // ele aplicou o valor padrao 

//aqui temos funções dentro de funções
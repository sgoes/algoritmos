function retornarUmaFuncao() {
    return function() {
        return function() {
            return "Boa tarde!!"
        };
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao())
console.log(retornarUmaFuncao()());
console.log(retornarUmaFuncao()()()); //forma de aceder às funções dentro de funções
function retornar() {

    function bomDia() {
        return "Bom dia!!!";
    }

    return bomDia;

}


const umaFuncao = retornar();
console.log(umaFuncao());

console.log(retornar);
console.log(retornar()()); // o resultado no primeiro parenteses espera que seja uma funcao e depois os segundos parenteses chamam o valor da função
//exemplo de uma função que retorna sempre um valor fixo


function sempreRetornaUm() {
    return 1
}


let valor = sempreRetornaUm() + 999;
console.log(valor);


function textoOuNumero(retornaTexto) {
    return retornaTexto ? 'Sou um taxto' : 123; //operador ternario

}

let texto = textoOuNumero(!true);
console.log(texto);

console.log(textoOuNumero(true)); // não é preciso declarar a variavel



function exemplo2(retornaTexto) {
    if (retornaTexto) {
        return "Sou um texto";
    } else {
        return 123;
    }
}

console.log(exemplo2(false));


function exemplo3(retornaTexto) { // não precisa de ter o else
    if (retornaTexto) {
        return "hello world";
    }
    return 1234;
}

console.log(exemplo3(false));
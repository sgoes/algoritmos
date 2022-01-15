function somar(a = 0, b = 0, c = 0, d = 0) { //vou definir um valor padrão
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4, 5, 6)); //o js ignora os parâmetros a mais do que estão definidos na função
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log("Fim")
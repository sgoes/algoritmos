//operadores unários

console.log(!!true);
console.log(!!false); // Temos aqui uma dupla negação


console.log(!true); //não é verdade -- output --> false
console.log(!false); // não é falso --> output --> true


console.log(!!'Texto!');
console.log(!!""); //o texto está vazio - logo dará falso 

console.log(!!1);
console.log(!!0); //é convertido para falso
console.log(!!-1); //é convertido para verdadeiro
console.log(!!-0.0001); // é convertido para verdadeiro
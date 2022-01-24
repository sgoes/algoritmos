const numeros = [1, 2, 3, 4, 5, 4, 8];

numeros.push(6);
console.log(numeros);

numeros[0] = 100; //alterar os valores do array 


console.log(numeros.join(' - ')); //permite juntar todos os elementos do array a partir de um determinado simbolo que coloquei
console.log(numeros.includes(10)); //permite verificar que se existe algum numero no array 
console.log(numeros.includes(6)); //permite verificar que se existe algum numero no array 
console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4)); //existem dois valores 4 no array e então vou perguntar qual é o index deles

const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2); // foi gerado um novo array
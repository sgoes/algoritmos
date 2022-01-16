console.log(typeof console);
console.log(typeof console.log); //é uma função que pertence ao objeto console // o método é uma função que pertence a um objeto ou uma função que foi colocada dentro de um objeto

const numeros = [1, 2, 3]; // o array é um tipo especial de objeto dentro da linguagem javascript

console.log(typeof numeros);



//push é o método que vai adicionar novos elementos num array, vai adicionar novos valores ---> atenção não é o index
numeros.push(4);
numeros.push(5);
numeros.push(10.98);

console.log(numeros);
console.log(numeros.length); //length neste caso é um atributo
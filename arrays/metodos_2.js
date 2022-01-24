const numeros = [1, 2, 3, 4, 5, 8]

//numeros.splice(1, 1) // a partir do indice 1 so quero excluir um elementos
numeros.splice(1, 2); //estou a excluir dois elementos a partir do indice 1
numeros.pop(numeros) //estou a remover o ultimo elemento do array

console.log(numeros);
console.log(numeros.pop());
console.log(numeros.pop());

//alguns metodos vão gerar um novo array e outros métodos vao mexer no array original
//por exemplo o método concat vai gerar um novo array, foi necessária criar uma nova const
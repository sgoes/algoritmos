//              0    1    2   3    4     5     --> o array é acessado pelo indice
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8]; // --> como declarar um array
//notas é uma variavel constante mas os valores internos no array podem ser modificados  exemplo: notas = "teste"; não pode ser modificado 


console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
console.log(notas[6]);

// como alterar um dado num array 
notas[4] = 8.7;
console.log(notas[4]);
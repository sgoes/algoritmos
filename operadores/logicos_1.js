let temDinheiro = true;
let estaEnsolado = true;
let carroEstaNaGaragem = false;


let resultadoE = '1# (AND)- Vai para o shopping? ';
resultadoE += temDinheiro && estaEnsolado; //operador AND é preciso que as duas condições sejam verdadeiras

console.log(resultadoE);

let resultadoOu = '#2 (OR)= - Vai para o shopping? ';
resultadoOu += estaEnsolado || carroEstaNaGaragem;
console.log(resultadoOu);

console.log(true !== true); //false
console.log(true !== false); // true
console.log(false !== false); //false
console.log(false !== true); //true

console.log('Não verdadeiro ' + !true);
console.log('Não falso ' + !false)
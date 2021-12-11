let t1 = true;
let t2 = true;


let comprarTV50 = t1 && t2; //AND
console.log('Vamos comprar a TV 50"?', comprarTV50);

let comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV 50"?', comprarTV32);

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete?', tomarSorvete);

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa?', ficarEmCasa);




/* 
console.log(true !== true); //false
console.log(true !== false); // true
console.log(false !== false); //false
console.log(false !== true); //true
 */
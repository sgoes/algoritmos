//Duas expressões a resultar em TRUE (Aritmeticos/Relacionais/Logicos)

let temDinheiro = true
let compraLivro = true
let mereceLivro = true

console.log('Vai comprar o livro?', compraLivro && temDinheiro)
console.log('Vai comprar o livro?', temDinheiro || mereceLivro)


//Duas expressões a resultar em FALSE (Aritmeticos/Relacionais/Logicos)
console.log('Vai comprar o livro', compraLivro !== temDinheiro)
console.log('Vai comprar o livro', !true)


let a = 4;
let b = 8;

console.log('#1 Hipotese verdadeira "AND" \n a = 4 e b = 8 \n a + b >= 12 && a + b == 12 \nOutput -->', a + b >= 12 && a + b == 12)

console.log('#2 Hipotese verdadeira "OR" \n a - b == 4 || a > b \n Output -->', b - a == 4 || a > b)

console.log('#3 Hipotese falsa "XOR" \n  a < b && b < a\n Output -->', a < b && b < a)

console.log('#4 Hipotese falsa "NOT" \n a == b || b < a\n Output -->', a == b || b < a)

let verdadeira1 = 2 + 5 >= 7 && 8 > 2;
console.log(verdadeira1)
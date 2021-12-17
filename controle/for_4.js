// [1, 1], [1, 2], [1, 3] //x e y, ou i e j, o i fica fixo e o j varia
// [2, 1], [2, 2], [2, 3] // o i aumentou de 1 para dois 
// [3, 1], [3, 2], [3, 3]

//vamos usar um laço for para imprimir o esquema antereior, vamos precisar de dois laços 
for (let i = 1; i <= 3; i++) {
    let linha = '';
    for (let j = 1; j <= 3; j++) {
        linha += `[${i}, ${j}] `;
    }
    console.log(linha);
}

//vamos supor que não quero exibir quando os numeros são iguais, preciso de criar uma outra estrutura de controle do tipo IF
for (let i = 1; i <= 3; i++) {
    let linha = '';
    for (let j = 1; j <= 3; j++) {
        if (i !== j) { //se o i for estreitamente diferente de j
            linha += `[${i}, ${j}] `;
        }
    }
    console.log(linha);
}
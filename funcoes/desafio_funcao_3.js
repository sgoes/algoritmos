const nota1 = 7.8;
const nota2 = 8.1;
const nota3 = 6.7;

//media
//status --> em aprovado >= 7; em recuperação >= 4 && < 7; reprovado < 4

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

console.log(minimo(nota1, nota2));
console.log(minimo(nota1, minimo(nota2, nota3))); //para comparar três valores
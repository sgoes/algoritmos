const nota = 8;
const bomComportamento = true;

if (nota >= 7 && bomComportamento) // se a nota for maior-igual que 7 e tiver bom comportamento a sentença é seguinte:
    console.log("Parabéns!");

if (nota < 7 || !bomComportamento) // se a nota é menor que 7 ou não teve bom comportamento, aqui também temos um operador lógico unário ---> !variavel
    console.log("Uma pena!!")
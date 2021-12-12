//variavel que vai controlar o meu laço
let controle = 1;



while (controle <= 10) {
    console.log(controle);
    controle++;
} // este laço while vai fazer a seguinte verificaçao --> enquanto a variável de controle for menor ou igual a 10, eu quero que ele fique repetindo o laço.

//quando criei a variavel de controle atribuiu o valor 1, ou seja, o laço  diz que a variavel de controle é menor ou igual a 10, esta expressão vai ser sempre verdade, preciso de arranjar uma forma que o laço execute por 10 vezes e pare, ou seja, tenho que arranjar forma em que algum momento essa expressão passe a ser falsa. Para isso coloco o ++, ou seja cada vez que o laço correr vai incrementar um valor à variável controle.

console.log('Quantidade: ' + controle); //ele faz 11 verificações, porque chegando ao 10, verefica-se que a expressão é verdadeira, sendo que para para a verificação do número seguinte. 
//Ter em conta que cada vez que o laço é executado ele, VERIFICA a expressão.

console.log('Fim');

//Nós aqui temos uma quantidade determinada de repetições, precisamos de TRÊS PARTES: 1) declarar a variavel que ajuda a controlar o laço 2) Definir a expressão que eça precisa mudar durante a execução do código
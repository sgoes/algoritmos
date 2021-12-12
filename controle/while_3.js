console.log(Date.now()); //quantidade de mil e segundos desde o 1 de janeiro de 1970 - 16393240 81944  / 16393241 23186 -- passaram sensivelmente 12 segundos 1 segundo = 1000 mil e segundos      10 segundos = 10 000 mil e segundos


const futuro = Date.now() + 2000;
let quantidade = 0;

while (Date.now() < futuro) { //quantidade de vezes que foi executado o laço while, podemos ficar a comparar se a data do futuro continua a ser maior que a do passado
    quantidade++
}


console.log('Quantidade ' + quantidade);
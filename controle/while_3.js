console.log(Date.now()); //quantidade de mil e segundos desde o 1 de janeiro de 1970


const futuro = Date.now() + 2000;
let quantidade = 0;

while (Date.now() < futuro) {
    quantidade++
}


console.log('Quantidade ' + quantidade);
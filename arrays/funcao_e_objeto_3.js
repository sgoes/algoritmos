//CONSTRUÇÃO DE OBJETOS ATRAVÉS DE UMA FUNCAO CONSTRUTORA 

//função construtora - será responsável por construir um objeto

function Data(dia = 01, mes = 01, ano = 2021) { //dia padrão declara-se um valor ao parametro
    this.dia = dia; //criando um atributo do dia dentro de um objeto que está a ser criado a partir dessa chamada de função construtora, dentro do momento que chamei o new 
    this.mes = mes;
    this.ano = ano;
    //é possível criar um método? sim, é possivel criar uma função dentro de uma funcao:
    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }

} //a partir de agora tenho uma função que cria objetos 

//produto(); //se rodar isto no browser vai gerar um objeto do tipo window, já se adicionar o NEW, ele cria um objeto do tipo produto,
const d1 = new Data(); // todas as funções construtoras devem iniciar-se com CapsLock
d1.ano = 1970; // isto serve para alterar o atibuto
d1.mes = 12; //atencao que para acessar o objeto e o seu valor tenho que obrigatoriamente usar o this
const d2 = new Data(25, 12, 2020);
const d3 = new Data(27, 03, 2021);
console.log(typeof d1); //  o tipo de d1 é um objeto
console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir()); // Data { dia: 1, mes: 1, ano: 2021 }
// Data { dia: 1, mes: 1, ano: 2021 }
console.log(d1);
console.log(d2);
console.log(d3);


//quando se cria uma função juntamente com a palavra new passamos a ter uma função do tipo construtora
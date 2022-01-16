 const notas = [7, 8, 3, 5, 10, 9, 8, 8];

 let valores = '';

 //foreach --> quer dizer percorra cada um dos elementos
 for (let nota of notas) { // é uma forma mais simples de percorrer cada um dos elementos sem precisar de colocar a variavel que vai controlar o laço (let i = 0; i < 6; i++)
     valores += nota + ' ';
 }

 console.log(valores);

 for (let nota of notas) { //outra abordagem
     console.log(nota);
 }

 let indices = '';

 for (let indice in notas) { //aqui estamos a revelar o indice, atraves do for in 
     indices += indice + ' ';
 }
 console.log(indices);
const numeros = [1, 2, 3, 4, 5, 6];


function praCadaElemento(elemento, indice, array) { //o forEacth recebe uma função, para cada elementos desta funçao ele vai chamar quantas vezes tiver o elemento do array
    console.log(elemento, indice, array);
};
numeros.forEach(praCadaElemento);

numeros.forEach(function() {
    console.log('forEacth');
})


/* for (let n of numeros) {
    console.log(n)
} */




//este for serve para percorrer cada valor do array
/* for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
} */
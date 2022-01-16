const numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 6; i++) { // este laço for vai percorrer os indices do array
    console.log(i, numeros[i]); // assim vamos conseguir acessar a todos os valores do array
}

console.log("Ciclo for flexivel")
for (let j = 0; j < numeros.length; j++) { // para tornar o array mais flexivel
    console.log(j, numeros[j]);
}

console.log("Ciclo for com array a mostrar de dois em dois")
for (let k = 0; k < numeros.length; k += 2) {
    console.log(k, numeros[k]);
}
function executar(param) {
    if (typeof param === 'function') { //estou a comparar para ver se é exatamente igual a... se isto for verdadeiro tenho uma função, ha aqui uma validação, desde o momento que ele valida e dá true, ele consegue prosseguir
        console.log(param()); // <--- parte central da aula
    }
}


function bomDia() {
    return "Bom dia";
}


executar(bomDia); // <--- parte central da aula


const x = bomDia;
const y = bomDia();


console.log(x);
console.log(y);
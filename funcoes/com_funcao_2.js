//todas as funcoes estão dentro de um bloco de codigo


const d1 = 3;
const m1 = 7;
const a1 = 2021;

//sempre que for definir uma função utilizo a palavra reservada function
function exibirData1() {
    console.log(`${d1}/${m1}/${a1}`);
}
const d2 = 23;
const m2 = 12;
const a2 = 2022;

function exibirData2() {
    console.log(`${d2}-${m2}-${a2}`);
}

function exibirData(d, m, y) {
    console.log(`${d}--${m}--${y}`);
}

exibirData(d1, m1, a1)
exibirData1();
exibirData2();
//construir um objeto de forma literal, esta é a forma mais simples

const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: { //isto é um objeto dentro um do outro 
        logradouro: 'Avenida de Republica - PentHouse',
        numero: 123,
        complemento: 'Já é meu 101 Bloco B',
        pontosRef: [
            'O mundo X',
            'O que quiser y',
        ],
        arrayDeObjetos: [ //isto é um array de objetos
            { marcaCarro: 'volvo', muitoProximo: true }, //o console.log retorna um objeto
            { modelo: 'xc60' },
            { fazAcontece: '20hrs_de_cod_por_semena' },
        ],
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel'] //é possivel tambem introduzir um array para um objeto
};

//como acessar aos atributos de um objeto
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco, cliente.nomeFilhos);
console.log(cliente.endereco.pontosRef[1]); //ecessar a um elemento de um array
console.log(cliente.endereco.arrayDeObjetos[0]);
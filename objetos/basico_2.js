let fn = function() {

}

const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() { //quando temos uma funcao dentro de um objeto chamamos de médoto
        return this.preco * (1 - this.desconto);
    }
};

console.log(produto.precoComDesconto());
//um objeto é composto por atributos e por métodos, utiliza-se a palavra this para referenciar um objeto, são os membros de um objeto
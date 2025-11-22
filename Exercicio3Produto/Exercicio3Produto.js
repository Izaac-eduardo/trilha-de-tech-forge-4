var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.valorTotalEstoque = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
// Exemplo de uso
var produto = new Produto("Teclado", 150, 10);
console.log(produto.valorTotalEstoque());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotalEstoque() {
        return this.preco * this.quantidade;
    }
}
// Exemplo de uso
const produto = new Produto("Teclado", 150, 10);
console.log(produto.valorTotalEstoque());
//# sourceMappingURL=Exercicio3Produto.js.map
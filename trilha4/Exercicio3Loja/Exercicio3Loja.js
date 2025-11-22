"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(p => p.codigo === codigo);
    }
}
// Teste prático
const listaProdutos = [
    { codigo: 101, nome: "Mouse" },
    { codigo: 102, nome: "Teclado" },
    { codigo: 103, nome: "Headset" }
];
const minhaLoja = new Loja(listaProdutos);
const produto = minhaLoja.buscarProdutoPorCodigo(102);
console.log(produto); // { codigo: 102, nome: 'Teclado' }
console.log(minhaLoja.buscarProdutoPorCodigo(999)); // undefined
//# sourceMappingURL=Exercicio3Loja.js.map
class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorTotalEstoque(): number {
    return this.preco * this.quantidade;
  }
}

// Exemplo de uso
const produto = new Produto("Teclado", 150, 10);
console.log(produto.valorTotalEstoque());

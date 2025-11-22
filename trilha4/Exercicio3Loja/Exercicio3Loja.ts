interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  produtos: ProdutoLoja[];

  constructor(produtos: ProdutoLoja[]) {
    this.produtos = produtos;
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}

// Teste prático
const listaProdutos: ProdutoLoja[] = [
  { codigo: 101, nome: "Mouse" },
  { codigo: 102, nome: "Teclado" },
  { codigo: 103, nome: "Headset" }
];

const minhaLoja = new Loja(listaProdutos);

const produto = minhaLoja.buscarProdutoPorCodigo(102);
console.log(produto);         // { codigo: 102, nome: 'Teclado' }
console.log(minhaLoja.buscarProdutoPorCodigo(999)); // undefined

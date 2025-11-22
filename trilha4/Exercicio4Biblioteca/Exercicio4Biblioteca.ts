interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  livros: Livro[];

  constructor(livros: Livro[]) {
    this.livros = livros;
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.disponivel);
  }
}

// Teste prático
const acervo: Livro[] = [
  { titulo: "1984", autor: "George Orwell", disponivel: true },
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: false },
  { titulo: "Clean Code", autor: "Robert C. Martin", disponivel: true }
];

const biblioteca = new Biblioteca(acervo);
console.log(biblioteca.buscarLivrosDisponiveis());

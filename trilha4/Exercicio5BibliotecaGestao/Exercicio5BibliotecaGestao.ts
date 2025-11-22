interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  livros: LivroBiblioteca[];

  constructor(livros: LivroBiblioteca[]) {
    this.livros = livros;
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter(livro => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

// Teste prático
const acervo: LivroBiblioteca[] = [
  { titulo: "Clean Code", autor: "Robert C. Martin", genero: "Programação", disponivel: true },
  { titulo: "1984", autor: "George Orwell", genero: "Ficção", disponivel: true },
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false },
  { titulo: "Refatoração", autor: "Martin Fowler", genero: "Programação", disponivel: true }
];

const biblioteca = new BibliotecaGestao(acervo);

console.log("Livros de Programação:", biblioteca.filtrarPorGenero("Programação"));
console.log("Livros por autor 'George Orwell':", biblioteca.buscarPorAutor("George Orwell"));
console.log("Livros disponíveis e ordenados:", biblioteca.obterLivrosDisponiveisOrdenados());

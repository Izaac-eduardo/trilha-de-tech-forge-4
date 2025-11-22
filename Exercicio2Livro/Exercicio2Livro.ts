class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;
  }

  marcarComoLido(): void {
    this.lido = true;
  }
}

// Exemplo de uso
const livro = new Livro("Clean Code", "Robert C. Martin", 464);
livro.marcarComoLido();
console.log(livro.lido);

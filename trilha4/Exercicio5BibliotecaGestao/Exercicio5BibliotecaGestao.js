"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BibliotecaGestao {
    constructor(livros) {
        this.livros = livros;
    }
    filtrarPorGenero(genero) {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }
    obterLivrosDisponiveisOrdenados() {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}
// Teste prático
const acervo = [
    { titulo: "Clean Code", autor: "Robert C. Martin", genero: "Programação", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Ficção", disponivel: true },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: false },
    { titulo: "Refatoração", autor: "Martin Fowler", genero: "Programação", disponivel: true }
];
const biblioteca = new BibliotecaGestao(acervo);
console.log("Livros de Programação:", biblioteca.filtrarPorGenero("Programação"));
console.log("Livros por autor 'George Orwell':", biblioteca.buscarPorAutor("George Orwell"));
console.log("Livros disponíveis e ordenados:", biblioteca.obterLivrosDisponiveisOrdenados());
//# sourceMappingURL=Exercicio5BibliotecaGestao.js.map
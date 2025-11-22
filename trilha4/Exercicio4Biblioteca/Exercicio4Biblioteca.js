"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    constructor(livros) {
        this.livros = livros;
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
// Teste prático
const acervo = [
    { titulo: "1984", autor: "George Orwell", disponivel: true },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: false },
    { titulo: "Clean Code", autor: "Robert C. Martin", disponivel: true }
];
const biblioteca = new Biblioteca(acervo);
console.log(biblioteca.buscarLivrosDisponiveis());
//# sourceMappingURL=Exercicio4Biblioteca.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    marcarComoLido() {
        this.lido = true;
    }
}
// Exemplo de uso
const livro = new Livro("Clean Code", "Robert C. Martin", 464);
livro.marcarComoLido();
console.log(livro.lido);
//# sourceMappingURL=Exercicio2Livro.js.map
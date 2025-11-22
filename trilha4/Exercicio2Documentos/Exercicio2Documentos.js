"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
// Teste prático
const texto = new Texto("Aviso", "A reunião será às 14h.");
console.log(texto.exibir());
//# sourceMappingURL=Exercicio2Documentos.js.map
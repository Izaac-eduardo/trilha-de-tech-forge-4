var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
    };
    return Livro;
}());
// Exemplo de uso
var livro = new Livro("Clean Code", "Robert C. Martin", 464);
livro.marcarComoLido();
console.log(livro.lido);

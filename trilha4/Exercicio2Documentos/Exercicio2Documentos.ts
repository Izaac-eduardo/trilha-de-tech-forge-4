interface Documento {
  titulo: string;
  conteudo: string;
}

class Texto implements Documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

// Teste prático
const texto = new Texto("Aviso", "A reunião será às 14h.");
console.log(texto.exibir());

abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  raio: number;
  constructor(raio: number) {
    super();
    this.raio = raio;
  }
  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

class Quadrado extends FiguraGeometrica {
  lado: number;
  constructor(lado: number) {
    super();
    this.lado = lado;
  }
  calcularArea(): number {
    return this.lado * this.lado;
  }
}

class Triangulo extends FiguraGeometrica {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }
  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
  figuras.forEach((figura, i) => {
    console.log(`Área da figura ${i+1}: ${figura.calcularArea().toFixed(2)}`);
  });
}

// Teste prático:
const figuras: FiguraGeometrica[] = [
  new Circulo(2),
  new Quadrado(3),
  new Triangulo(4, 5)
];

imprimirAreas(figuras);

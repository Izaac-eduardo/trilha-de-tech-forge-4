"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura, i) => {
        console.log(`Área da figura ${i + 1}: ${figura.calcularArea().toFixed(2)}`);
    });
}
// Teste prático:
const figuras = [
    new Circulo(2),
    new Quadrado(3),
    new Triangulo(4, 5)
];
imprimirAreas(figuras);
//# sourceMappingURL=Exercicio2FiguraGeometrica.js.map
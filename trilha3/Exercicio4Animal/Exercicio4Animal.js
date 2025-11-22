"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor() {
        this.energia = 100; // valor inicial padrão
    }
    aumentarEnergia(valor) {
        this.energia += valor;
    }
    reduzirEnergia(valor) {
        this.energia -= valor;
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer() {
        this.reduzirEnergia(30);
        console.log("Leão caçando...");
        this.aumentarEnergia(50);
    }
}
class Passaro extends Animal {
    comer() {
        this.aumentarEnergia(20);
        console.log("Pássaro se alimentando...");
    }
}
// Teste polimórfico:
function alimentarAnimal(animal) {
    animal.comer();
    animal.statusEnergia();
}
const leao = new Leao();
const passaro = new Passaro();
alimentarAnimal(leao);
alimentarAnimal(passaro);
//# sourceMappingURL=Exercicio4Animal.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temperatura {
    constructor(valorCelsius) {
        this.valorCelsius = valorCelsius;
    }
    paraFahrenheit() {
        return this.valorCelsius * 9 / 5 + 32;
    }
    paraKelvin() {
        return this.valorCelsius + 273.15;
    }
}
// Exemplo de uso
const temp = new Temperatura(25);
console.log("Fahrenheit:", temp.paraFahrenheit());
console.log("Kelvin:", temp.paraKelvin());
//# sourceMappingURL=Exercicio4Temperatura.js.map
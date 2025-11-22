var Temperatura = /** @class */ (function () {
    function Temperatura(valorCelsius) {
        this.valorCelsius = valorCelsius;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return this.valorCelsius * 9 / 5 + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valorCelsius + 273.15;
    };
    return Temperatura;
}());
// Exemplo de uso
var temp = new Temperatura(25);
console.log("Fahrenheit:", temp.paraFahrenheit());
console.log("Kelvin:", temp.paraKelvin());

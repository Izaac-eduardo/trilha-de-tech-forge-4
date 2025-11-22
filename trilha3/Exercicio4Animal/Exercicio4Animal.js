var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.energia = 100; // valor inicial padrão
    }
    Animal.prototype.aumentarEnergia = function (valor) {
        this.energia += valor;
    };
    Animal.prototype.reduzirEnergia = function (valor) {
        this.energia -= valor;
    };
    Animal.prototype.statusEnergia = function () {
        console.log("Energia atual: ".concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.comer = function () {
        this.reduzirEnergia(30);
        console.log("Leão caçando...");
        this.aumentarEnergia(50);
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function () {
        this.aumentarEnergia(20);
        console.log("Pássaro se alimentando...");
    };
    return Passaro;
}(Animal));
// Teste polimórfico:
function alimentarAnimal(animal) {
    animal.comer();
    animal.statusEnergia();
}
var leao = new Leao();
var passaro = new Passaro();
alimentarAnimal(leao);
alimentarAnimal(passaro);

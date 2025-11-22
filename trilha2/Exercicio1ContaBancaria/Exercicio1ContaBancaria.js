var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
    };
    return ContaBancaria;
}());
// Exemplo de uso
var conta = new ContaBancaria("João", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(conta.saldo);

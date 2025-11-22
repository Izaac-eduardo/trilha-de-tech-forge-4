"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
}
// Exemplo de uso
const conta = new ContaBancaria("João", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(conta.saldo);
//# sourceMappingURL=Exercicio1ContaBancaria.js.map
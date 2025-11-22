class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): void {
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

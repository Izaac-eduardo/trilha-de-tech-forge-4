abstract class Pagamento {
  abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  validarCartao(): boolean {
    // Simples validação: 16 dígitos
    return this.numeroCartao.length === 16;
  }

  processar(): void {
    if (this.validarCartao()) {
      console.log("Pagamento com cartão processado.");
    } else {
      console.log("Número do cartão inválido.");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    // Simulação de geração de boleto
    const codigo = Math.floor(100000 + Math.random() * 900000);
    console.log(`Código do boleto gerado: ${codigo}`);
  }
}

function processarPagamento(pagamento: Pagamento): void {
  pagamento.processar();
}

// Teste prático:
const pagCartao = new PagamentoCartao("1234567812345678"); // válido
const pagBoleto = new PagamentoBoleto();

processarPagamento(pagCartao);
processarPagamento(pagBoleto);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarCartao() {
        // Simples validação: 16 dígitos
        return this.numeroCartao.length === 16;
    }
    processar() {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado.");
        }
        else {
            console.log("Número do cartão inválido.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    processar() {
        // Simulação de geração de boleto
        const codigo = Math.floor(100000 + Math.random() * 900000);
        console.log(`Código do boleto gerado: ${codigo}`);
    }
}
function processarPagamento(pagamento) {
    pagamento.processar();
}
// Teste prático:
const pagCartao = new PagamentoCartao("1234567812345678"); // válido
const pagBoleto = new PagamentoBoleto();
processarPagamento(pagCartao);
processarPagamento(pagBoleto);
//# sourceMappingURL=Exercicio3Pagamento.js.map
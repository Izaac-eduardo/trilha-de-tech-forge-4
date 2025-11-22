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
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        // Simples validação: 16 dígitos
        return this.numeroCartao.length === 16;
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado.");
        }
        else {
            console.log("Número do cartão inválido.");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagamentoBoleto.prototype.processar = function () {
        // Simulação de geração de boleto
        var codigo = Math.floor(100000 + Math.random() * 900000);
        console.log("C\u00F3digo do boleto gerado: ".concat(codigo));
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamento(pagamento) {
    pagamento.processar();
}
// Teste prático:
var pagCartao = new PagamentoCartao("1234567812345678"); // válido
var pagBoleto = new PagamentoBoleto();
processarPagamento(pagCartao);
processarPagamento(pagBoleto);

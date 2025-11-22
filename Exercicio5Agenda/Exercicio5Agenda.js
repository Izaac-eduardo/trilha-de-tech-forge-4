var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listarCompromissos = function () {
        this.compromissos.forEach(function (c, i) {
            console.log("".concat(i + 1, ". ").concat(c));
        });
    };
    return Agenda;
}());
// Exemplo de uso
var agenda = new Agenda();
agenda.adicionarCompromisso("Reunião às 10h");
agenda.adicionarCompromisso("Dentista às 15h");
agenda.listarCompromissos();

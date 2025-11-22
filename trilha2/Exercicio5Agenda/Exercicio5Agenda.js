"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
    }
    listarCompromissos() {
        this.compromissos.forEach((c, i) => {
            console.log(`${i + 1}. ${c}`);
        });
    }
}
// Exemplo de uso
const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião às 10h");
agenda.adicionarCompromisso("Dentista às 15h");
agenda.listarCompromissos();
//# sourceMappingURL=Exercicio5Agenda.js.map
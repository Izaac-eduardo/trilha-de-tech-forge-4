class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
  }

  listarCompromissos(): void {
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

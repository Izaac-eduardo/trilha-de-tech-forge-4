"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VoteSystem {
}
class Election extends VoteSystem {
    constructor() {
        super(...arguments);
        this.votes = {};
    }
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    constructor() {
        super(...arguments);
        this.votes = {};
    }
    voteFor(candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults() {
        // Ordena por total de votos decrescente
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate]) => candidate);
    }
}
// Teste prático
const election = new Election();
election.voteFor("Ana");
election.voteFor("Ana");
election.voteFor("João");
console.log("Resultados da eleição:", election.getResults());
const poll = new Poll();
poll.voteFor("Maria");
poll.voteFor("Maria");
poll.voteFor("Carlos");
console.log("Votos ordenados:", poll.getResults());
//# sourceMappingURL=Exercicio4VoteSystem.js.map
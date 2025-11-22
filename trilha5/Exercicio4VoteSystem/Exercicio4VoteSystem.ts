abstract class VoteSystem {
  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  private votes: Record<string, number> = {};

  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }
  getResults(): object {
    return this.votes;
  }
}

class Poll extends VoteSystem {
  private votes: Record<string, number> = {};

  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }
  getResults(): string[] {
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

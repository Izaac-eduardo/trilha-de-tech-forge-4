abstract class Animal {
  private energia: number;

  constructor() {
    this.energia = 100; // valor inicial padrão
  }

  protected aumentarEnergia(valor: number): void {
    this.energia += valor;
  }

  protected reduzirEnergia(valor: number): void {
    this.energia -= valor;
  }

  abstract comer(): void;

  statusEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer(): void {
    this.reduzirEnergia(30);
    console.log("Leão caçando...");
    this.aumentarEnergia(50);
  }
}

class Passaro extends Animal {
  comer(): void {
    this.aumentarEnergia(20);
    console.log("Pássaro se alimentando...");
  }
}

// Teste polimórfico:
function alimentarAnimal(animal: Animal) {
  animal.comer();
  animal.statusEnergia();
}

const leao = new Leao();
const passaro = new Passaro();

alimentarAnimal(leao);
alimentarAnimal(passaro);

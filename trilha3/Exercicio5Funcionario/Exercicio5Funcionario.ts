abstract class Funcionario {
  protected nome: string;
  protected salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  abstract calcularBonus(): number;

  getNome(): string {
    return this.nome;
  }

  getSalario(): number {
    return this.salario;
  }

  salarioComBonus(): number {
    return this.salario + this.calcularBonus();
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.salario * 0.10;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.salario * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach(f => {
    console.log(
      `${f.getNome()} recebe R$ ${f.salarioComBonus().toFixed(2)}`
    );
  });
}

// Teste prático
const lista: Funcionario[] = [
  new Gerente("Amanda", 7000),
  new Operario("Rafaela", 3000)
];

calcularSalarioComBonus(lista);

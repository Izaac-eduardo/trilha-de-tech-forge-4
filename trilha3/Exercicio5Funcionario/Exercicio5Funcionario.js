"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
    salarioComBonus() {
        return this.salario + this.calcularBonus();
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.salario * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(f => {
        console.log(`${f.getNome()} recebe R$ ${f.salarioComBonus().toFixed(2)}`);
    });
}
// Teste prático
const lista = [
    new Gerente("Amanda", 7000),
    new Operario("Rafaela", 3000)
];
calcularSalarioComBonus(lista);
//# sourceMappingURL=Exercicio5Funcionario.js.map
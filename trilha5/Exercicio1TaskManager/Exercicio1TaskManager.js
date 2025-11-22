"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
}
class Project extends TaskManager {
    constructor() {
        super(...arguments);
        this.tasks = new Set();
    }
    addTask(task) {
        this.tasks.add(task);
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
class DailyTasks extends TaskManager {
    constructor() {
        super(...arguments);
        this.tasks = new Set();
    }
    addTask(task) {
        this.tasks.add(task);
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
// Teste prático
const projeto = new Project();
projeto.addTask("Configurar ambiente");
projeto.addTask("Configurar ambiente"); // Duplicada é ignorada
projeto.addTask("Criar endpoint");
const diarias = new DailyTasks();
diarias.addTask("Tomar café");
diarias.addTask("Checar e-mails");
diarias.addTask("Tomar café"); // Duplicada é ignorada
console.log("Tarefas do projeto:", projeto.listTasks());
console.log("Tarefas diárias:", diarias.listTasks());
//# sourceMappingURL=Exercicio1TaskManager.js.map
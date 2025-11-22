abstract class TaskManager {
  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

class Project extends TaskManager {
  private tasks: Set<string> = new Set();

  addTask(task: string): void {
    this.tasks.add(task);
  }
  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

class DailyTasks extends TaskManager {
  private tasks: Set<string> = new Set();

  addTask(task: string): void {
    this.tasks.add(task);
  }
  listTasks(): string[] {
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

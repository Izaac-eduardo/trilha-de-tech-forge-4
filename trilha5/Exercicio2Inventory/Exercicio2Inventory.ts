abstract class Inventory {
  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  private items: Record<string, number> = {};

  addItem(item: string, quantity: number): void {
    this.items[item] = (this.items[item] || 0) + quantity;
  }
  removeItem(item: string): void {
    delete this.items[item];
  }
  getInventory(): Record<string, number> {
    return this.items;
  }
}

class StoreInventory extends Inventory {
  private items: Record<string, number> = {};

  addItem(item: string, quantity: number): void {
    const total = (this.items[item] || 0) + quantity;
    this.items[item] = total > 10 ? 10 : total;
  }
  removeItem(item: string): void {
    delete this.items[item];
  }
  getInventory(): Record<string, number> {
    return this.items;
  }
}

// Teste prático
const warehouse = new WarehouseInventory();
warehouse.addItem("Caixa", 150);
warehouse.addItem("Caixa", 20);

const store = new StoreInventory();
store.addItem("Boné", 7);
store.addItem("Boné", 5); // Comportamento: vai só até 10
store.addItem("Camiseta", 15); // Também limita a 10

console.log("Depósito:", warehouse.getInventory());
console.log("Loja:", store.getInventory());

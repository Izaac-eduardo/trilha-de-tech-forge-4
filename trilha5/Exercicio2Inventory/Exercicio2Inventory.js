"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
}
class WarehouseInventory extends Inventory {
    constructor() {
        super(...arguments);
        this.items = {};
    }
    addItem(item, quantity) {
        this.items[item] = (this.items[item] || 0) + quantity;
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
        return this.items;
    }
}
class StoreInventory extends Inventory {
    constructor() {
        super(...arguments);
        this.items = {};
    }
    addItem(item, quantity) {
        const total = (this.items[item] || 0) + quantity;
        this.items[item] = total > 10 ? 10 : total;
    }
    removeItem(item) {
        delete this.items[item];
    }
    getInventory() {
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
//# sourceMappingURL=Exercicio2Inventory.js.map
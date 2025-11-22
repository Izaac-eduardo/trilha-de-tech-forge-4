"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteManager {
}
class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = new Set();
    }
    addFavorite(item) {
        this.favorites.add(item);
    }
    getFavorites() {
        return Array.from(this.favorites).sort();
    }
}
class BooksFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = [];
    }
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item); // Adiciona novo no início
        }
    }
    getFavorites() {
        return this.favorites;
    }
}
// Teste prático
const movies = new MoviesFavoriteManager();
movies.addFavorite("Interestelar");
movies.addFavorite("Interestelar"); // Ignora duplicada
movies.addFavorite("Matrix");
console.log("Filmes:", movies.getFavorites());
const books = new BooksFavoriteManager();
books.addFavorite("1984");
books.addFavorite("O Hobbit");
books.addFavorite("1984"); // Ignora duplicada
console.log("Livros:", books.getFavorites());
//# sourceMappingURL=Exercicio3FavoriteManager.js.map
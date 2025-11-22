abstract class FavoriteManager {
  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  private favorites: Set<string> = new Set();

  addFavorite(item: string): void {
    this.favorites.add(item);
  }
  getFavorites(): string[] {
    return Array.from(this.favorites).sort();
  }
}

class BooksFavoriteManager extends FavoriteManager {
  private favorites: string[] = [];

  addFavorite(item: string): void {
    if (!this.favorites.includes(item)) {
      this.favorites.unshift(item); // Adiciona novo no início
    }
  }
  getFavorites(): string[] {
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

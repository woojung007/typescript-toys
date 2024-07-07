import Album from "./Album";
import Book from "./Book";
import Movie from "./Movie";

class ShopMain {
  constructor() {
    this.main();
  }

  main() {
    const book = new Book("JAVA", 10000, "han", "12345");
    const album = new Album("앨범1", 15000, "seo");
    const movie = new Movie("영화1", 18000, "감독1", "배우1");

    book.print();
    album.print();
    movie.print();

    const sum = book.getPrice() + album.getPrice() + movie.getPrice();
    console.log("상품 가격의 합: ", sum);
  }
}

new ShopMain();

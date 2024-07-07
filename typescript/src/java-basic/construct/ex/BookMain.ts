import Book from "./Book";

class BookMain {
  constructor() {
    this.main();
  }

  main() {
    const book1 = new Book();
    book1.displayInfo();

    const book2 = new Book("Hello Java", "Seo");
    book2.displayInfo();

    const book3 = new Book("Hello Java", "Seo", 700);
    book3.displayInfo();
  }
}

new BookMain();

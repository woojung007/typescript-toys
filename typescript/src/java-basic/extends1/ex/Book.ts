import Item from "./Item";

export default class Book extends Item {
  author: string = "";
  publisher: string = "";

  constructor(name: string, price: number, author: string, publisher: string) {
    super(name, price);

    this.author = author;
    this.publisher = publisher;
  }

  /**
   * @override
   */
  print(): void {
    super.print();
    console.log("- 저자 : ", this.author, ", 출판사 : ", this.publisher);
  }
}

import Item from "./Item";

export default class Album extends Item {
  singer: string = "";

  constructor(name: string, price: number, singer: string) {
    super(name, price);

    this.singer = singer;
  }

  /**
   * @override
   */
  print(): void {
    super.print();
    console.log("- 가수 : ", this.singer);
  }
}

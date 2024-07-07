import Item from "./Item";

export default class Movie extends Item {
  director: string = "";
  actor: string = "";

  constructor(name: string, price: number, director: string, actor: string) {
    super(name, price);

    this.director = director;
    this.actor = actor;
  }

  /**
   * @override
   */
  print(): void {
    super.print();
    console.log("- 감독 : ", this.director, ", 배우 : ", this.actor);
  }
}

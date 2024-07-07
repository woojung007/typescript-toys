import AbstractAnimal from "./AbstractAnimal";

export default class Cat extends AbstractAnimal {
  /**
   * @override
   */
  public sound(): void {
    console.log("냐용 🐱");
  }
}

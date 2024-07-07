import AbstractAnimal from "./AbstractAnimal";

export default class Dog extends AbstractAnimal {
  /**
   * @override
   */
  public sound(): void {
    console.log("멍멍 🐶");
  }
}

import AbstractAnimal from "./AbstractAnimal";

export default class Cow extends AbstractAnimal {
  /**
   * @override
   */
  sound(): void {
    console.log("음메 🐮");
  }
}

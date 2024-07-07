import Animal from "./Animal";

export default class Cat extends Animal {
  /**
   * @override
   */
  sound(): void {
    console.log("냐용 🐱");
  }
}

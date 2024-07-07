import Animal from "./Animal";

export default class Dog extends Animal {
  /**
   * @override
   */
  sound(): void {
    console.log("멍멍 🐶");
  }
}

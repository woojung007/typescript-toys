import Animal from "./Animal";

export default class Cow extends Animal {
  /**
   * @override
   */
  sound(): void {
    console.log("음메 🐮");
  }
}

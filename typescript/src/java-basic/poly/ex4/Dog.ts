import AbstractAnimal from "./AbstractAnimal";

export default class Dog extends AbstractAnimal {
  override sound(): void {
    console.log("멍멍 🐶");
  }

  override move(): void {
    console.log("멍멍 이동");
  }
}

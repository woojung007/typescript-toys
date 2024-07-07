import AbstractAnimal from "./AbstractAnimal";

export default class Cat extends AbstractAnimal {
  override sound(): void {
    console.log("냐용 🐱");
  }

  override move(): void {
    console.log("냐용 이동");
  }
}

import AbstractAnimal from "./AbstractAnimal";

export default class Dog extends AbstractAnimal {
  override sound() {
    console.log("멍멍");
  }
}

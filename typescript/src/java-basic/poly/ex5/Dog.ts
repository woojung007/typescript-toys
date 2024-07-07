import { InterfaceAnimal } from "./InterfaceAnimal";

export default class Dog implements InterfaceAnimal {
  sound(): void {
    console.log("멍멍 🐶");
  }

  move(): void {
    console.log("멍멍이 움직인다");
  }
}

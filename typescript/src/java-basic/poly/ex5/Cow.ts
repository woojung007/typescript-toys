import { InterfaceAnimal } from "./InterfaceAnimal";

export default class Cow implements InterfaceAnimal {
  sound(): void {
    console.log("음메 🐮");
  }

  move(): void {
    console.log("음메 이동");
  }
}

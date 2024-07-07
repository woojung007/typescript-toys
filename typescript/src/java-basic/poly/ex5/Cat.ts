import { InterfaceAnimal } from "./InterfaceAnimal";

export default class Cat implements InterfaceAnimal {
  sound(): void {
    console.log("냐용 🐱");
  }

  move(): void {
    console.log("냐용 이동");
  }
}

import AbstractAnimal from "./AbstractAnimal";
import { Fly } from "./Fly";

export default class Bird extends AbstractAnimal implements Fly {
  override sound() {
    console.log("짹짹");
  }

  fly() {
    console.log("새 날기");
  }
}

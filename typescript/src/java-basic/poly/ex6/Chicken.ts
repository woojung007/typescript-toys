import AbstractAnimal from "./AbstractAnimal";
import { Fly } from "./Fly";

class Chicken extends AbstractAnimal implements Fly {
  override sound() {
    console.log("꼬끼오");
  }

  fly() {
    console.log("닭 날기");
  }
}

export default Chicken;

import Dog from "./Dog";
import Bird from "./Bird";
import Chicken from "./Chicken";
import { InterfaceAnimal } from "../ex5/InterfaceAnimal";
import { Fly } from "./Fly";

class SoundFlyMain {
  // constructor() {
  //   SoundFlyMain.main();
  // }

  public static main() {
    const dog = new Dog();
    const bird = new Bird();
    const chicken = new Chicken();

    this.soundAnimal(dog);
    this.soundAnimal(bird);
    this.soundAnimal(chicken);

    this.flyAnimal(bird);
    this.flyAnimal(chicken);
  }

  // AbstractAnimal 사용 가능
  private static soundAnimal(animal: InterfaceAnimal) {
    animal.sound();
  }

  // Fly 인터페이스가 있으면 사용 가능
  private static flyAnimal(fly: Fly) {
    fly.fly();
  }
}

new SoundFlyMain();

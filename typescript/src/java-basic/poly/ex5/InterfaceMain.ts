import Cat from "./Cat";
import Cow from "./Cow";
import Dog from "./Dog";
import { InterfaceAnimal } from "./InterfaceAnimal";

class InterfaceMain {
  constructor() {
    InterfaceMain.main();
  }

  public static main() {
    // 인터페이스 생성 불가
    // const interfaceAnimal = new InterfaceMain();

    const cat = new Cat();
    const dog = new Dog();
    const cow = new Cow();

    InterfaceMain.soundAnimal(cat);
    InterfaceMain.soundAnimal(dog);
    InterfaceMain.soundAnimal(cow);
  }

  // 변하지 않는 부분
  private static soundAnimal(animal: InterfaceAnimal) {
    animal.sound();
  }
}

new InterfaceMain();

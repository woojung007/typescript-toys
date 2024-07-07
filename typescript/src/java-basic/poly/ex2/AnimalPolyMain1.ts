import Animal from "./Animal";
import Cat from "./Cat";
import Cow from "./Cow";
import Dog from "./Dog";

class AnimalPolyMain1 {
  constructor() {
    this.main();
  }

  main() {
    const dog = new Dog();
    const cat = new Cat();
    const cow = new Cow();

    AnimalPolyMain1.soundAnimal(dog);
    AnimalPolyMain1.soundAnimal(cat);
    AnimalPolyMain1.soundAnimal(cow);
  }

  private static soundAnimal(animal: Animal) {
    console.log("동물 소리 테스트 시작");
    animal.sound();
    console.log("동물 소리 테스트 종료");
  }
}

new AnimalPolyMain1();

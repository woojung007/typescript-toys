import AbstractAnimal from "./AbstractAnimal";
import Cat from "./Cat";
import Cow from "./Cow";
import Dog from "./Dog";

class AbstractMain {
  constructor() {
    AbstractMain.main();
  }

  public static main() {
    // 추상 클래스 생성 불가
    // const animal = new AbstractAnimal()

    const dog: Dog = new Dog();

    const animals: AbstractAnimal[] = [dog, new Cat(), new Cow()];

    for (const animal of animals) {
      AbstractMain.soundAnimal(animal);
    }

    dog.move();
  }

  // 변하지 않는 부분
  private static soundAnimal(animal: AbstractAnimal) {
    console.log("동물 소리 테스트 시작");
    animal.sound();
    console.log("동물 소리 테스트 종료");
  }
}

new AbstractMain();

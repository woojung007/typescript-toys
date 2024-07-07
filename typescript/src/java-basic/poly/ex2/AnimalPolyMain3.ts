import Animal from "./Animal";
import Cat from "./Cat";
import Cow from "./Cow";
import Dog from "./Dog";

class AnimalPolyMain3 {
  constructor() {
    this.main();
  }

  main() {
    const animals: Animal[] = [new Dog(), new Cat(), new Cow()];

    for (const animal of animals) {
      this.soundAnimal(animal);
    }
  }

  // 변하지 않는 부분
  private soundAnimal(animal: Animal) {
    console.log("동물 소리 테스트 시작");
    animal.sound();
    console.log("동물 소리 테스트 종료");
  }
}

new AnimalPolyMain3();

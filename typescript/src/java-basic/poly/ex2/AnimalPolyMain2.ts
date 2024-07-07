import Animal from "./Animal";
import Cat from "./Cat";
import Cow from "./Cow";
import Dog from "./Dog";

class AnimalPolyMain2 {
  constructor() {
    this.main();
  }

  main() {
    const dog = new Dog();
    const cat = new Cat();
    const cow = new Cow();

    const animals: Animal[] = [dog, cat, cow];

    // 변하지 않는 부분
    for (const animal of animals) {
      console.log("동물 소리 테스트 시작");
      animal.sound();
      console.log("동물 소리 테스트 종료");
    }
  }
}

new AnimalPolyMain2();

import Cat from "./Cat";
import Cow from "./Cow";
import Dog from "./Dog";

class AnimalSoundMain {
  constructor() {
    this.main();
  }

  main() {
    const dog = new Dog();
    const cat = new Cat();
    const cow = new Cow();

    console.log("동물 소리 테스트 시작");
    dog.sound();
    console.log("동물 소리 테스트 종료");

    console.log("동물 소리 테스트 시작");
    cat.sound();
    console.log("동물 소리 테스트 종료");

    AnimalSoundMain.soundCow(cow);
  }

  private static soundCow(cow: Cow) {
    console.log("동물 소리 테스트 시작");
    cow.sound();
    console.log("동물 소리 테스트 종료");
  }
}

new AnimalSoundMain();

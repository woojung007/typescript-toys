import Child from "./Child";
import Parent from "./Parent";

// up casting vs down casting

class CastingMain3 {
  constructor() {
    this.main();
  }

  main() {
    const child: Child = new Child();

    const parent1 = child as Parent; // 업케스팅은 생략 가능, 생략 권장
    const parent2 = child; // 업캐스팅 생략

    parent1.parentMethod();
    parent2.parentMethod();
  }
}

new CastingMain3();

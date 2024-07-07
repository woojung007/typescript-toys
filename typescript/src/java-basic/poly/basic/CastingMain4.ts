// 다운캐스팅을 자동으로 하지 않는 이유
import Child from "./Child";
import Parent from "./Parent";

class CastingMain4 {
  constructor() {
    this.main();
  }

  main() {
    const parent1: Parent = new Child();
    const child1: Child = parent1 as Child;
    child1.childMethod(); // 문제 없음

    const parent2: Parent = new Parent(); // (Child가 없음)
    const child2: Child = parent2 as Child; // 런타임 오류 - ClassCastException
    child2.childMethod(); // 실행 불가
  }
}

new CastingMain4();

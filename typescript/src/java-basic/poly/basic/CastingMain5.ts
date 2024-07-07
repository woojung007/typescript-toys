import Child from "./Child";
import Parent from "./Parent";

class CastingMain5 {
  constructor() {
    this.main();
  }

  main() {
    const parent1: Parent = new Parent();
    console.log("parent1 호출 ===");
    CastingMain5.call(parent1);

    const parent2: Parent = new Child();
    console.log("parent2 호출 ===");
    CastingMain5.call(parent2);
  }

  private static call(parent: Parent) {
    parent.parentMethod();

    // Child 인스턴스인 경우 childMethod() 실행
    if (parent instanceof Child) {
      console.log("Child 인스턴스가 맞음");
      const child: Child = parent as Child;
      child.childMethod();
    }
  }
}

new CastingMain5();

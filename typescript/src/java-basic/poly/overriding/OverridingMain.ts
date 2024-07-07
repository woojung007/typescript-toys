import Child from "./Child";
import Parent from "./Parent";

class OverridingMain {
  constructor() {
    this.main();
  }

  main() {
    // 자식 변수가 자식 인스턴스 참조
    const child: Child = new Child();
    console.log("Child -> Child");
    console.log("value = ", child.value);
    child.method();

    // 부모 변수가 부모 인스턴스 참조
    const parent: Parent = new Parent();
    console.log("Parent -> Parent");
    console.log("value = ", parent.value);
    parent.method();

    // 부모 변수가 자식 인스턴스 참조(다형적 참조)
    const poly: Parent = new Child();
    console.log("Parent -> Child");
    console.log("value = ", poly.value); // 변수 오버라이딩
    poly.method(); // 메서드 오버라이딩
  }
}

new OverridingMain();

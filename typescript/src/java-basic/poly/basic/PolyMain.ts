import Child from "./Child";
import Parent from "./Parent";

class PolyMain {
  constructor() {
    this.main();
  }

  main() {
    // 부모 변수가 부모 인스턴스 참조
    console.log("parent -> parent");
    const parent = new Parent();

    parent.parentMethod();

    // 자식 변수가 자식 인스턴스 참조
    console.log("child -> child");
    const child = new Child();
    child.parentMethod();
    child.childMethod();

    // 부모 변수가 자식 인스턴스 참조(다형적 참조)
    console.log("parent -> child");
    const poly: Parent = new Child();
    poly.parentMethod();

    // 자식은 부모를 담을 수 없다.
    // const child1:Child = new Parent()  // 컴파일 오류

    // 자식의 기능은 호출할 수 없다. 컴파일 오류 발생
    // poly.childMethod()
  }
}

new PolyMain();

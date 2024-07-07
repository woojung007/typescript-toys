import Child from "./Child";
import Parent from "./Parent";

class CastingMain2 {
  constructor() {
    this.main();
  }

  main() {
    // 부모 변수가 자식 인스턴스 참조(다형적 참조)
    const poly: Parent = new Child(); // x001

    // 단, 자식의 기능은 호출할 수 없다. 컴파일 오류 발생
    // poly.childMethod()

    // 다운 캐스팅(부모 타입 -> 자식 타입)
    const child: Child = poly as Child; // x001 parent
    child.childMethod();

    // 일시적 다운캐스팅 - 해당 메서드를 호출하는 순간만 다운 캐스팅
    (poly as Child).childMethod();
  }
}

new CastingMain2();

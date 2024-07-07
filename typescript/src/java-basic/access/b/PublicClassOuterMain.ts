import PublicClass from "../a/PublicClass";

class PublicClassOuterMain {
  constructor() {
    this.main();
  }

  main() {
    const publicClass = new PublicClass();

    // 다른 패키지 접근 불가
    // const defaultClass1 = new
  }
}

new PublicClassOuterMain();

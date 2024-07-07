import ConstructInit from "./ConstructInit";
import FieldInit from "./FieldInit";

class FinalFieldMain {
  constructor() {
    this.main();
  }

  main() {
    // final 필드 - 생성자 초기화
    console.log("생성자 초기화");
    const constructInit1 = new ConstructInit(10);
    const constructInit2 = new ConstructInit(20);

    console.log(constructInit1.value);
    console.log(constructInit2.value);

    // final 필드 - 필드 초기화
    console.log("필드 초기화");
    const filedInit1 = new FieldInit();
    const filedInit2 = new FieldInit();
    const filedInit3 = new FieldInit();

    console.log(filedInit1.value);
    console.log(filedInit2.value);
    console.log(filedInit3.value);

    // 상수
    console.log("상수");
    console.log(FieldInit.CONST_VALUE);
  }
}

new FinalFieldMain();

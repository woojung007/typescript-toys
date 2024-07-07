import DecoData from "./DecoData";

class DecoDataMain {
  constructor() {
    this.main();
  }

  main() {
    console.log("1. 정적 호출");
    DecoData.staticCall();

    console.log("2. 인스턴스 호출");
    const data1 = new DecoData();
    data1.instanceCall();

    console.log("3. 인스턴스 호출2");
    const data2 = new DecoData();
    data2.instanceCall();

    DecoData.staticCall();

    // parameter
    DecoData.staticCall2(data2);

    // 추가
    // 인스턴스를 통합 접근
    const data3 = new DecoData();
    // data3.staticCall() // 불가능

    // 클래스를 통한 접근
    DecoData.staticCall();
  }
}

new DecoDataMain();

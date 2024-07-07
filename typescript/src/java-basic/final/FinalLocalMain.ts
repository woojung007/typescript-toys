class FinalLocalMain {
  // final 지역 변수 (readonly) (1)
  // readonly data1 = 10;

  constructor(readonly parameter: number) {
    parameter = 20;
    // final 도 한번만 변경할 수 있으므로 생성자에서는 변경 가능한 듯 ..?
    this.main();
  }

  main() {
    // this.data1 = 10  컴파일 오류 (1)

    // final 지역 변수 (readonly) (2)
    const data1 = 10;
    // 상수이므로 'data1'에 할당할 수 없습니다.
    // data1 = 20 컴파일 오류
  }

  // 컴파일 에러
  // 매개 변수 속성은 생성자 구현에서만 허용됩니다.
  //   static method(readonly parameter: number) {
  //     parameter = 20;
  //   }
}

new FinalLocalMain(10);

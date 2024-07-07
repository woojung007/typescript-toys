import Data from "../ref/Data";

class FinalRefMain {
  constructor() {
    this.main();
  }

  main() {
    const data: Data = new Data();

    // data = new Data() 컴파일 오류

    // 참조 대상의 값은 변경 가능
    data.value = 10;
    console.log(data.value);
    data.value = 20;
    console.log(data.value);
  }
}

new FinalRefMain();

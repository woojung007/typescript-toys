import Data from "./Data";

class MethodChange2 {
  constructor() {
    this.main();
  }

  public main() {
    const dataA = new Data();
    dataA.value = 10;

    console.log("메서드 호출 전: ", dataA.value);
    MethodChange2.changeReference(dataA);
    console.log("메서드 호출 후: ", dataA.value);
  }

  static changeReference(dataX: Data) {
    dataX.value = 20;
  }
}

new MethodChange2();

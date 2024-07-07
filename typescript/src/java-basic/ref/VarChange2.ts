import Data from "./Data";

class VarChange2 {
  constructor() {
    this.main();
  }

  public main() {
    const dataA = new Data();
    dataA.value = 10;
    const dataB = dataA;

    console.log("dataA 참조값 =", dataA);
    console.log("dataB 참조값 =", dataB);
    console.log("dataA.value =", dataA.value);
    console.log("dataB.value =", dataB.value);

    // dataA 변경
    dataA.value = 20;
    console.log("변경 dataA.value = 20");
    console.log("dataA.value =", dataA.value);
    console.log("dataB.value =", dataB.value);

    // dataB 변경
    dataB.value = 30;
    console.log("변경 dataB.value = 30");
    console.log("dataA.value =", dataA.value);
    console.log("dataB.value =", dataB.value);
  }
}

new VarChange2();

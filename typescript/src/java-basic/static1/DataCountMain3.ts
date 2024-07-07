import Data3 from "./Data3";

class DataCountMain1 {
  constructor() {
    this.main();
  }

  main() {
    const data1 = new Data3("A");
    console.log("A count", Data3.count);

    const data2 = new Data3("B");
    console.log("B count", Data3.count);

    const data3 = new Data3("C");
    console.log("C count", Data3.count);

    // 추가
    // 인스턴스를 통한 접근 (X 권장하지 않음)
    const data4 = new Data3("D");
    // console.log(data4.count); // 불가능

    // 클래스를 통한 접근
    console.log(Data3.count);
  }
}

new DataCountMain1();

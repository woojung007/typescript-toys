import Data1 from "./Data1";

class DataCountMain1 {
  constructor() {
    this.main();
  }

  main() {
    const data1 = new Data1("A");
    console.log("A count=", data1.count);

    const data2 = new Data1("B");
    console.log("B count=", data2.count);

    const data3 = new Data1("C");
    console.log("C count=", data3.count);
  }
}

new DataCountMain1();

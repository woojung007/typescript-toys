import Counter from "./Counter";
import Data2 from "./Data2";

class DataCountMain1 {
  constructor() {
    this.main();
  }

  main() {
    const counter = new Counter();
    const data1 = new Data2("A", counter);
    console.log("A count", counter.count);

    const data2 = new Data2("B", counter);
    console.log("B count", counter.count);

    const data3 = new Data2("C", counter);
    console.log("C count", counter.count);
  }
}

new DataCountMain1();

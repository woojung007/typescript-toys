import BigData from "./BigData";
import Data from "./Data";

class NullMain3 {
  constructor() {
    this.main();
  }

  main() {
    let bigData = new BigData();
    bigData.data = new Data();

    console.log("bigData.count=", bigData.count); // java - 0, tsc - undefined
    console.log("bigData.data=", bigData.data); // java - 참조값 (x001), tsc - Data {value: undefined}

    console.log("bigData.data.value=", bigData.data.value); // java - 0, tsc - undefined
  }
}

new NullMain3();

import BigData from "./BigData";

class NullMain3 {
  constructor() {
    this.main();
  }

  main() {
    let bigData = new BigData();

    console.log("bigData.count=", bigData.count); // java - null, tsc - undefined
    console.log("bigData.data=", bigData.data); // java - 0, tsc - undefined

    console.log("bigData.data.value=", bigData.data.value); // NullPointerException
  }
}

new NullMain3();

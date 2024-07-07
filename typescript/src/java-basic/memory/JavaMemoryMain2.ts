import Data from "./Data";

class JavaMemoryMain2 {
  constructor() {
    this.main();
  }

  main() {
    console.log("main start");
    JavaMemoryMain2.method1();
    console.log("main end");
  }

  static method1() {
    console.log("method1 start");
    const data1 = new Data(10);
    JavaMemoryMain2.method2(data1);
    console.log("method1 end");
  }

  static method2(data2: Data) {
    console.log("method2 start");
    console.log("data.value=", data2.getValue());
    console.log("method2 end");
  }
}

new JavaMemoryMain2();

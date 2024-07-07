class JavaMemoryMain1 {
  constructor() {
    this.main();
  }

  main() {
    console.log("main start");
    this.method1(10);
    console.log("main end");
  }

  method1(m1: number) {
    console.log("method1 start");
    const cal = m1 * 2;
    this.method2(cal);
    console.log("method1 end");
  }

  method2(m2: number) {
    console.log("method2 start");
    console.log("method2 end");
  }
}

new JavaMemoryMain1();

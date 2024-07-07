class VarChange1 {
  constructor() {
    this.main();
  }

  public main() {
    let a = 10;
    let b = a;
    console.log("a = ", a);
    console.log("b = ", b);

    // a 변경
    a = 20;
    console.log("변경 a = 20");
    console.log("a = ", a);
    console.log("b = ", b);

    // b 변경
    b = 30;
    console.log("변경 b = 30");
    console.log("a = ", a);
    console.log("b = ", b);
  }
}

new VarChange1();

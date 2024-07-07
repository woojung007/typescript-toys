class MethodChange1 {
  constructor() {
    this.main();
  }

  public main() {
    const a: number = 10;

    console.log("메서드 호출 전: ", a);
    MethodChange1.changePrimitive(a);
    console.log("메서드 호출 후: ", a);
  }

  static changePrimitive(x: number) {
    x = 20;
  }
}

new MethodChange1();

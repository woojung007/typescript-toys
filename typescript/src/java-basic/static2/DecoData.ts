export default class DecoData {
  private instanceValue: number = 0;
  private static staticValue: number = 0;

  // static -> static
  public static staticCall() {
    this.staticValue++; // 정적 변수 접근
    this.staticMethod(); // 정적 메서드 접근

    // instanceValue++;  // 인스턴스 변수 접근, compile error
    // instanceMethod(); // 인스턴스 메서드 접근, compile error
  }

  public instanceCall() {
    this.instanceValue++; // 인스턴스 변수 접근
    this.instanceMethod(); // 인스턴스 메서드 접근

    DecoData.staticValue++; // 정적 변수 접근
    DecoData.staticMethod(); // 정적 메서드 접근
  }

  public static staticCall2(data: DecoData) {
    data.instanceValue++;
    data.instanceMethod();
  }

  private instanceMethod() {
    console.log("instanceValue=", this.instanceValue);
  }

  private static staticMethod() {
    console.log("staticValue=", this.staticValue);
  }
}

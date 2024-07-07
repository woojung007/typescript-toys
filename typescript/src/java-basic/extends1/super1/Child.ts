import Parent from "./Parent";

export default class Child extends Parent {
  public value: string = "child";

  /**
   * @override
   */
  hello() {
    console.log("child hello");
  }

  call() {
    console.log("this value = ", this.value);
    // console.log("super value = ", super.value); // super value 에 접근 불가능 ㅠ

    this.hello();
    super.hello();
  }
}

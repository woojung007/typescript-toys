import Parent from "./Parent";

export default class Child extends Parent {
  value: string = "child";

  /**
   * @override
   */
  method(): void {
    console.log("child.method");
  }
}

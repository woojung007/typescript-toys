export default class Parent {
  public publicValue: number = 0;
  protected protectedValue: number = 0;
  defaultValue: number = 0;
  private privateValue: number = 0;

  public publicMethod() {
    console.log("public");
  }

  protected protectedMethod() {
    console.log("protected");
  }

  defaultMethod() {
    console.log("default");
  }

  private privateMethod() {
    console.log("private");
  }

  public printParent() {
    console.log("=== parent 메서드 안 ===");
    console.log("publicValue = ", this.publicValue);
    console.log("protectedValue = ", this.protectedValue);
    console.log("defaultValue = ", this.defaultValue);
    console.log("privateValue = ", this.privateValue);

    // 부모 메서드 안에서 모두 접근 가능
    this.defaultMethod();
    this.privateMethod();
  }
}

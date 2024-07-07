class AccessData {
  public publicField: number;
  defaultField: number;
  private privateField: number;

  public publicMethod() {
    console.log("public method 호출", this.publicField);
  }

  defaultMethod() {
    console.log("default method 호출", this.defaultField);
  }

  private privateMethod() {
    console.log("private method 호출", this.privateField);
  }

  public innerAccess() {
    console.log("내부 호출");
    this.publicField = 100;
    this.defaultField = 200;
    this.privateField = 300;
    this.publicMethod();
    this.defaultMethod();
    this.privateMethod();
  }
}

export default AccessData;

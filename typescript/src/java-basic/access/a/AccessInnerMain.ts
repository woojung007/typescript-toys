import AccessData from "./AccessData";

class AccessInnerMain {
  constructor() {
    this.main();
  }

  main() {
    const data = new AccessData();
    //  public 호출 가능
    data.publicField = 1;
    data.publicMethod();

    // default 호출 가능
    data.defaultField = 2;
    data.defaultMethod();

    // private 호출 불가
    // data.privateField = 3
    // data.privateMethod()

    data.innerAccess();
  }
}

new AccessInnerMain();

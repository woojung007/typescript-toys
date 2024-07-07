import InitData from "./InitData";

class InitMain {
  constructor() {
    this.main();
  }

  public main() {
    const data: InitData = new InitData();

    console.log("value1 = ", data.value1);
    console.log("value2 = ", data.value2);
  }
}

new InitMain();

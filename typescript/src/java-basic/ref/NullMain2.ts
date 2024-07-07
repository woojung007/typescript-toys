import Data from "./Data";

class NullMain2 {
  constructor() {
    this.main();
  }

  public main() {
    let data: Data = null;
    data.value = 10; // NullPointerException 예외 발생
    // null.vale = 10 => data 에는 null 값이 들어있다.
    console.log("data = ", data.value);
  }
}

new NullMain2();

import Data from "./Data";

class NullMain1 {
  constructor() {
    this.main();
  }

  public main() {
    let data = null;
    console.log(`1. data = ${data}`);

    data = new Data();
    console.log(`2. data = ${data}`);

    data = null;
    console.log(`3. data = ${data}`);
  }
}

new NullMain1();

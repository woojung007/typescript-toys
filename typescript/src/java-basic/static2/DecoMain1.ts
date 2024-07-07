import DecoUtil1 from "./DecoUtil1";

class DecoMain1 {
  constructor() {
    this.main();
  }

  main() {
    const s = "hello java";
    const utils = new DecoUtil1();
    const deco = utils.deco(s);

    console.log("before:", s);
    console.log("after:", deco);
  }
}

new DecoMain1();

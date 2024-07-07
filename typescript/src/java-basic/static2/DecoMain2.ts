import DecoUtil2 from "./DecoUtil2";

class DecoMain2 {
  constructor() {
    this.main();
  }

  main() {
    const s = "hello java";
    const deco: string = DecoUtil2.deco(s); // static

    console.log("before:", s);
    console.log("after:", deco);
  }
}

new DecoMain2();

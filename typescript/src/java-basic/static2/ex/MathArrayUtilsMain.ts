import MathArrayUtils from "./MathArrayUtils";

class MathArrayUtilsMain {
  constructor() {
    MathArrayUtilsMain.main();
  }

  public static main() {
    const values = [1, 2, 3, 4, 5];

    console.log("sum =", MathArrayUtils.sum(values));
    console.log("average =", MathArrayUtils.average(values));
    console.log("min =", MathArrayUtils.min(values));
    console.log("max =", MathArrayUtils.max(values));
  }
}

new MathArrayUtilsMain();

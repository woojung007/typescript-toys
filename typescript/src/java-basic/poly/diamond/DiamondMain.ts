import Child from "./Child";
import { InterfaceA } from "./InterfaceA";
import { InterfaceB } from "./InterfaceB";

class DiamondMain {
  constructor() {
    DiamondMain.main();
  }

  public static main() {
    const a: InterfaceA = new Child();
    a.methodA();
    a.methodCommon();

    const b: InterfaceB = new Child();
    b.methodB();
    b.methodCommon();
  }
}

new DiamondMain();

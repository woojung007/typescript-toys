import { InterfaceA } from "./InterfaceA";
import { InterfaceB } from "./InterfaceB";

export default class Child implements InterfaceA, InterfaceB {
  methodA() {
    console.log("Child.methodA");
  }
  methodB() {
    console.log("Child.methodB");
  }
  methodCommon() {
    console.log("Child.methodCommon");
  }
}

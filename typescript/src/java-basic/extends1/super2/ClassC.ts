import ClassB from "./ClassB";

export default class ClassC extends ClassB {
  constructor() {
    super(10);
    console.log("ClassC 생성자");
  }
}

import ClassA from "./ClassA";

export default class ClassB extends ClassA {
  constructor(a: number) {
    super();
    console.log("Class B 생성자, a = ", a);
  }

  //   constructor(a: number, b:number) {
  //     super();
  //     console.log("Class B 생성자, a = ", a, 'b = ', b);
  //   }
}

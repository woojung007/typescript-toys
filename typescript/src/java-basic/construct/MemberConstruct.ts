export default class MemberConstruct {
  name: string = "";
  age: number = 0;
  grade: number = 0;

  constructor(name: string, age: number, grade: number) {
    console.log(`생성자 호출 name = ${name}, age = ${age}, grade = ${grade}`);
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

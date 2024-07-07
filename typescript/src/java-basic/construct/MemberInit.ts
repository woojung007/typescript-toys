export default class MemberInit {
  name: string = "";
  age: number = 0;
  grade: number = 0;

  // 추가
  initMember(name: string, age: number, grade: number) {
    this.name = name; // 자기 자신의 인스턴스를 가리킨다.
    this.age = age;
    this.grade = grade;
  }
}

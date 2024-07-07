import Student from "./Student";

class Method2 {
  constructor() {
    this.main();
  }

  public main() {
    const student1: Student = Method2.createStudent("학생1", 15, 90);
    const student2: Student = Method2.createStudent("학생2", 16, 80);

    Method2.printStudent(student1);
    Method2.printStudent(student2);
  }

  static createStudent(name: string, age: number, grade: number) {
    const student = new Student();
    student.name = name;
    student.age = age;
    student.grade = grade;

    return student; // x001
  }

  static printStudent(student: Student) {
    console.log(
      "이름 : ",
      student.name,
      "나이 : ",
      student.age,
      "성적 : ",
      student.grade
    );
  }
}

new Method2();

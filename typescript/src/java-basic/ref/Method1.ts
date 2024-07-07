import Student from "./Student";

class Method1 {
  constructor() {
    this.main();
  }

  public main() {
    const student1 = new Student(); // x001
    Method1.initStudent(student1, "학생1", 15, 90);

    const student2 = new Student();
    Method1.initStudent(student2, "학생2", 16, 98);

    Method1.printStudent(student1);
    Method1.printStudent(student2);
  }

  static initStudent(
    student: Student,
    name: string,
    age: number,
    grade: number
  ) {
    student.name = name;
    student.age = age;
    student.grade = grade;
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

new Method1();

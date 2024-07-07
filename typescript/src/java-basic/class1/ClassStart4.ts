import Student from "./Student";

class ClassStart4 {
  constructor() {
    this.main();
  }

  public main() {
    const student1 = new Student();
    student1.name = "학생1";
    student1.age = 15;
    student1.grade = 90;

    const student2 = new Student();
    student2.name = "학생2";
    student2.age = 17;
    student2.grade = 80;

    const students = new Array(2).fill(new Student());

    students[0] = student1;
    students[1] = student2;

    console.log(
      `이름 : ${students[0].name} 나이 : ${students[0].age} 성적 : ${students[0].grade}`
    );
    console.log(
      `이름 : ${students[1].name} 나이 : ${students[1].age} 성적 : ${students[1].grade}`
    );
  }
}

new ClassStart4();

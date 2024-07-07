import Student from "./Student";

class ClassStart5 {
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

    const students = [student1, student2];

    // 1. for문 도입
    for (let i = 0; i < students.length; i++) {
      console.log(
        `이름 : ${students[i].name} 나이 : ${students[i].age} 성적 : ${students[i].grade}`
      );
    }

    // 2. 반복 요소를 변수에 담아서 처리하기
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      console.log(
        `이름 : ${student.name} 나이 : ${student.age} 성적 : ${student.grade}`
      );
    }

    // 3. 향상된 for 문
    for (const student of students) {
      console.log(
        "향상된 for 문 :::",
        `이름 : ${student.name} 나이 : ${student.age} 성적 : ${student.grade}`
      );
    }
  }
}

new ClassStart5();

class ClassStart1 {
  public static main(args: string[]) {
    const student1Name: string = "학생1";
    const student1Age: number = 15;
    const student1Grade: number = 90;

    const student2Name: string = "학생2";
    const student2Age: number = 16;
    const student2Grade: number = 80;

    console.log(
      `이름 : ${student1Name} 나이 : ${student1Age} 성적 : ${student1Grade}`
    );
    console.log(
      `이름 : ${student2Name} 나이 : ${student2Age} 성적 : ${student2Grade}`
    );

    console.log(args);
  }
}

new ClassStart1.main(["yiwoojung"]);

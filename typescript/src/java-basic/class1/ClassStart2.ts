class ClassStart2 {
  public static main(args: string[]) {
    const studentNames: string[] = ["학생1", "학생2", "학생3"];
    const studentAges: number[] = [15, 16, 17];
    const studentGrades: number[] = [90, 80, 100];

    for (let i = 0; i < studentNames.length; i++) {
      console.log(
        `이름 : ${studentNames[i]} 나이 : ${studentAges[i]} 성적 : ${studentGrades[i]}`
      );
    }
  }
}

new ClassStart2.main(["yiwoojung"]);

class ConstantMain1 {
  constructor() {
    this.main();
  }

  main() {
    console.log("프로그램 최대 참여자 수", 1000);
    let currentUserCount = 999;
    ConstantMain1.process(currentUserCount++);
    ConstantMain1.process(currentUserCount++);
    ConstantMain1.process(currentUserCount++);
  }

  private static process(currentUserCount: number) {
    console.log("참여자 수 :", currentUserCount);
    if (currentUserCount > 1000) {
      console.log("대기자로 등록");
    } else {
      console.log("게임에 참여합니다.");
    }
  }
}

new ConstantMain1();

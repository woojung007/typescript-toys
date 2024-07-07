import Constant from "./Constant";

class ConstantMain2 {
  constructor() {
    this.main();
  }

  main() {
    console.log("프로그램 최대 참여자 수", Constant.MAX_USERS);
    let currentUserCount = 999;
    ConstantMain2.process(currentUserCount++);
    ConstantMain2.process(currentUserCount++);
    ConstantMain2.process(currentUserCount++);

    // 읽기 전용 속성이므로 'MAX_USERS'에 할당할 수 없습니다.
    // Constant.MAX_USERS = 20
  }

  private static process(currentUserCount: number) {
    console.log("참여자 수 :", currentUserCount);
    if (currentUserCount > Constant.MAX_USERS) {
      console.log("대기자로 등록");
    } else {
      console.log("게임에 참여합니다.");
    }
  }
}

new ConstantMain2();

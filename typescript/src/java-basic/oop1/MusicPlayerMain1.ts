class MusicPlayerMain1 {
  constructor() {
    this.main();
  }

  main() {
    let volume = 0;
    let isOn = false;

    // 음악 플레이어 켜기
    isOn = true;
    console.log("음악 플레이어를 시작합니다.");

    // 볼륨 증가
    volume++;
    console.log("음악 플레이어 볼륨:", volume);

    // 볼륨 증가
    volume++;
    console.log("음악 플레이어 볼륨:", volume);

    // 볼륨 감소
    volume--;
    console.log("음악 플레이어 볼륨:", volume);

    // 음악 플레이어 상태
    console.log("음악 플레이어 상태 확인");

    if (isOn) {
      console.log("음악 플레이어 ON, 볼륨 : ", volume);
    } else {
      console.log("음악 플레이어 OFF, 볼륨 : ", volume);
    }

    // 음악 플레이어 끄기
    isOn = false;
    console.log("음악 플레이어를 종료합니다.");
  }
}

new MusicPlayerMain1();

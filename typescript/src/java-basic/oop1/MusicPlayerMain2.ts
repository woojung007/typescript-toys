import MusicPlayerData from "./MusicPlayerData";

class MusicPlayerMain2 {
  constructor() {
    this.main();
  }

  main() {
    let data: MusicPlayerData = new MusicPlayerData();

    // 음악 플레이어 켜기
    data.isOn = true;
    console.log("음악 플레이어를 시작합니다.");

    // 볼륨 증가
    data.volume++;
    console.log("음악 플레이어 볼륨:", data.volume);

    // 볼륨 증가
    data.volume++;
    console.log("음악 플레이어 볼륨:", data.volume);

    // 볼륨 감소
    data.volume--;
    console.log("음악 플레이어 볼륨:", data.volume);

    // 음악 플레이어 상태
    console.log("음악 플레이어 상태 확인");

    if (data.isOn) {
      console.log("음악 플레이어 ON, 볼륨 : ", data.volume);
    } else {
      console.log("음악 플레이어 OFF, 볼륨 : ", data.volume);
    }

    // 음악 플레이어 끄기
    data.isOn = false;
    console.log("음악 플레이어를 종료합니다.");
  }
}

new MusicPlayerMain2();

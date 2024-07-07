import MusicPlayerData from "./MusicPlayerData";

class MusicPlayerMain3 {
  constructor() {
    this.main();
  }

  main() {
    let data: MusicPlayerData = new MusicPlayerData();

    // 음악 플레이어 켜기
    MusicPlayerMain3.on(data);

    // 볼륨 증가
    MusicPlayerMain3.volumeUp(data);

    // 볼륨 증가
    MusicPlayerMain3.volumeUp(data);

    // 볼륨 감소
    MusicPlayerMain3.volumeDown(data);

    // 음악 플레이어 상태
    MusicPlayerMain3.showStatus(data);

    // 음악 플레이어 끄기
    MusicPlayerMain3.off(data);
  }

  static on(data: MusicPlayerData) {
    data.isOn = true;
    console.log("음악 플레이어를 시작합니다.");
  }

  static off(data: MusicPlayerData) {
    data.isOn = false;
    console.log("음악 플레이어를 종료합니다.");
  }

  static volumeUp(data: MusicPlayerData) {
    data.volume++;
    console.log("음악 플레이어 볼륨:", data.volume);
  }

  static volumeDown(data: MusicPlayerData) {
    data.volume--;
    console.log("음악 플레이어 볼륨:", data.volume);
  }

  static showStatus(data: MusicPlayerData) {
    console.log("음악 플레이어 상태 확인");

    if (data.isOn) {
      console.log("음악 플레이어 ON, 볼륨 : ", data.volume);
    } else {
      console.log("음악 플레이어 OFF, 볼륨 : ", data.volume);
    }
  }
}

new MusicPlayerMain3();

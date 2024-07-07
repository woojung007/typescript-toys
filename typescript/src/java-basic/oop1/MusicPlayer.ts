class MusicPlayer {
  volume: number = 0;
  isOn: boolean = false;

  on() {
    this.isOn = true;
    console.log("음악 플레이어를 시작합니다.");
  }

  off() {
    this.isOn = false;
    console.log("음악 플레이어를 종료합니다.");
  }

  volumeUp() {
    this.volume++;
    console.log("음악 플레이어 볼륨:", this.volume);
  }

  volumeDown() {
    this.volume--;
    console.log("음악 플레이어 볼륨:", this.volume);
  }

  showStatus() {
    console.log("음악 플레이어 상태 확인");

    if (this.isOn) {
      console.log("음악 플레이어 ON, 볼륨 : ", this.volume);
    } else {
      console.log("음악 플레이어 OFF, 볼륨 : ", this.volume);
    }
  }
}

export default MusicPlayer;

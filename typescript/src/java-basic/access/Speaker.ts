export default class Speaker {
  private volume: number = 0;

  constructor(volume: number) {
    this.volume = volume;
  }

  volumeUp() {
    if (this.volume >= 100) {
      console.log("음량을 증가할 수  없습니다. 최대 음량입니다.");
      return;
    }

    this.volume += 10;
    console.log("음량을 10 증가합니다.");
  }

  volumeDown() {
    this.volume -= 10;
    console.log("volumeDown 호출");
  }

  showVolume() {
    console.log("현재 음량 : ", this.volume);
  }
}

import Speaker from "./Speaker";

class SpeakerMain {
  constructor() {
    this.main();
  }

  main() {
    const speaker = new Speaker(90);
    speaker.showVolume();

    speaker.volumeUp();
    speaker.showVolume();

    speaker.volumeUp();
    speaker.showVolume();

    // 필드에 직접 접근
    console.log("volume 필드 직접 접근 수정");
    // speaker.volume = 200; // private 접근 오류
    speaker.showVolume();
  }
}

new SpeakerMain();

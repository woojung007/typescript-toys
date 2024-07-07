import { Sender } from "./Sender";

export class FaceBookSender implements Sender {
  sendMessage(message: string) {
    console.log("페이스북에 발송합니다.", message);
  }
}

import { Sender } from "./Sender";

export class SmsSender implements Sender {
  sendMessage(message: string) {
    console.log("SMS를 발송합니다.", message);
  }
}

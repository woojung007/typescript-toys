import { Sender } from "./Sender";
import EmailSender from "./EmailSender";
import { SmsSender } from "./SmsSender";
import { FaceBookSender } from "./FaceBookSender";

class SendMain {
  constructor() {
    SendMain.main();
  }

  public static main() {
    const senders: Sender[] = [
      new EmailSender(),
      new SmsSender(),
      new FaceBookSender(),
    ];

    for (const sender of senders) {
      sender.sendMessage("환영합니다!");
    }
  }
}

new SendMain();

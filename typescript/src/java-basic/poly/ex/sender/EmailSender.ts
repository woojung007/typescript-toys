import { Sender } from "./Sender";

class EmailSender implements Sender {
  sendMessage(message: string) {
    console.log("메일을 발송합니다.", message);
  }
}

export default EmailSender;

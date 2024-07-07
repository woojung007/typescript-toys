import { Pay } from "./Pay";

class NewPay implements Pay {
  pay(amount: number) {
    console.log("NewPay 시스템과 연결합니다.");
    console.log(amount, "원 결제를 시도합니다.");
    return true;
  }
}

export default NewPay;

import KakaoPay from "./KakaoPay";
import NaverPay from "./NaverPay";
import { Pay } from "./Pay";
import PayStore from "./PayStore";

// 변하지 않는 부분
class PayService {
  public processPay(option: string, amount: number) {
    console.log("결제를 시작합니다: option=", option, "amount=", amount);

    const pay: Pay = PayStore.findPay(option);
    const result: boolean = pay.pay(amount); // 결제 진행

    if (result) {
      console.log("결제가 성공했습니다.");
    } else {
      console.log("결제가 실패했습니다.");
    }
  }
}
export default PayService;

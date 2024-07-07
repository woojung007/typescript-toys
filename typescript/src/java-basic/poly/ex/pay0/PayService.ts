import KakaoPay from "./KakaoPay";
import NaverPay from "./NaverPay";

class PayService {
  public processPay(option: string, amount: number) {
    let result: boolean;
    console.log("결제를 시작합니다: option=", option, "amount=", amount);

    if (option === "kakao") {
      const kakaoPay: KakaoPay = new KakaoPay();
      result = kakaoPay.pay(amount);
    } else if (option === "naver") {
      const naverPay = new NaverPay();
      result = naverPay.pay(amount);
    } else {
      console.log("결제 수단이 없습니다.");
      result = false;
    }

    if (result) {
      console.log("결제가 성공했습니다.");
    } else {
      console.log("결제가 실패했습니다.");
    }
  }
}
export default PayService;

import { Pay } from "./Pay";
import KakaoPay from "./KakaoPay";
import NaverPay from "./NaverPay";
import NewPay from "./NewPay";
import DefaultPay from "./DefaultPay";

// 결제 수단 선택
abstract class PayStore {
  // 결제 수단 추가 시 변하는 부분
  public static findPay(option: string): Pay {
    if (option === "kakao") {
      return new KakaoPay();
    } else if (option === "naver") {
      return new NaverPay();
    } else if (option === "new") {
      return new NewPay();
    } else {
      return new DefaultPay();
    }
  }
}

export default PayStore;

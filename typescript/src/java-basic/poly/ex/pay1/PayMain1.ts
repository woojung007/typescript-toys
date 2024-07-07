import PayService from "./PayService";

class PayMain1 {
  constructor() {
    PayMain1.main();
  }

  public static main() {
    const payService: PayService = new PayService();

    // kakao 결제
    payService.processPay("kakao", 5000);

    // naver 결제
    payService.processPay("naver", 10000);

    // NewPay 결제
    payService.processPay("new", 10000);

    // 잘못된 결제 수단 선택
    payService.processPay("bad", 15000);
  }
}

new PayMain1();

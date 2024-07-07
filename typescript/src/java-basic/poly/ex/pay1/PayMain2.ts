import PayService from "./PayService";
import * as readlineSync from "readline-sync";

class PayMain2 {
  constructor() {
    PayMain2.main();
  }

  public static main() {
    const payService: PayService = new PayService();

    while (true) {
      const payOption: string =
        readlineSync.question("결제 수단을 입력하세요: ");

      if (payOption === "exist") {
        console.log("프로그램을 종료합니다.");
        return;
      }

      const amount: number =
        readlineSync.questionInt("결제 금액을 입력하세요: ");

      payService.processPay(payOption, amount);
    }
  }
}

new PayMain2();

import { Pay } from "./Pay";

class DefaultPay implements Pay {
  public pay(amount: number): boolean {
    console.log("결제 수단이 없습니다!");
    return false;
  }
}
export default DefaultPay;

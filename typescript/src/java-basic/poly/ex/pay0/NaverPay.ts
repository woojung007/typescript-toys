class NaverPay {
  public pay(amount: number): boolean {
    console.log("네이버페이 시스템과 연결합니다.");
    console.log(amount, "원 결제를 시도합니다.");
    return true;
  }
}

export default NaverPay;

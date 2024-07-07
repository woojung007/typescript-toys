export default class BankAccount {
  private balance: number;

  public constructor() {
    this.balance = 0;
  }

  // public 메서드: deposit
  public deposit(amount: number) {
    if (this.isAmountValid(amount)) {
      this.balance += amount;
      return;
    }

    console.log("유효하지 않은 금액입니다.");
  }

  // public 메서드 : withdraw
  public withdraw(amount: number) {
    if (this.isAmountValid(amount) && this.balance - amount >= 0) {
      this.balance -= amount;
      return;
    }

    console.log("유효하지 않은 금액이거나 잔액이 부족합니다.");
  }

  // public 메서드 : getBalance
  public getBalance() {
    return this.balance;
  }

  private isAmountValid(amount: number) {
    // 금액이 0보다 커야함
    return amount > 0;
  }
}

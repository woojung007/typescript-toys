class Account {
  // 잔액
  balance: number = 0;

  // 입금
  deposit(amount: number) {
    return (this.balance += amount);
  }

  // 출금
  withdraw(amount: number) {
    if (amount > this.balance) {
      return console.log("잔액이 부족합니다.");
    }

    return (this.balance -= amount);
  }
}

export default Account;

import Account from "./Account";

class AccountMain {
  constructor() {
    this.main();
  }

  main() {
    const account = new Account();
    account.balance = 0;
    account.deposit(10000);
    account.withdraw(9000);
    account.withdraw(2000); // 오류 메시지 출력

    console.log("잔고 : ", account.balance);
  }
}

new AccountMain();

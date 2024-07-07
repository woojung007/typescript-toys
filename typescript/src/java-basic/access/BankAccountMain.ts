import BankAccount from "./BankAccount";

class BankAccountMain {
  constructor() {
    this.main();
  }

  main() {
    const account = new BankAccount();
    account.deposit(10000);
    account.withdraw(3000);
    console.log("balance = ", account.getBalance());
  }
}

new BankAccountMain();

import ProductOrder from "./ProductOrder";

class ProductOrderMain {
  constructor() {
    this.main();
  }

  public main() {
    const order1 = new ProductOrder();
    order1.productName = "두부";
    order1.price = 2000;
    order1.quantity = 2;

    const order2 = new ProductOrder();
    order2.productName = "김치";
    order2.price = 5000;
    order2.quantity = 1;

    const order3 = new ProductOrder();
    order3.productName = "콜라";
    order3.price = 1500;
    order3.quantity = 2;

    const orders = [order1, order2, order3];

    let totalAmount = 0;

    for (const order of orders) {
      console.log(
        `상품명 : ${order.productName}, 가격 : ${order.price}, 수량 : ${order.quantity}`
      );
      totalAmount += order.price * order.quantity;
    }

    console.log(`총 결제 금액 : ${totalAmount}`);
  }
}

new ProductOrderMain();

import ProductOrder from "./ProductOrder";
import * as readlineSync from "readline-sync";

class ProductOrderMain3 {
  constructor() {
    this.main();
  }

  public main() {
    const productQuantity: number = parseInt(
      readlineSync.question("입력할 주문의 개수를 입력하세요: ")
    );

    let orders: ProductOrder[] = new Array(productQuantity).fill(
      new ProductOrder()
    );

    for (let i = 0; i < orders.length; i++) {
      console.log(`${i + 1} 번째 주문 정보를 입력하세요.`);

      const productName: string = readlineSync.question("상품명 : ");
      const price: number = parseInt(readlineSync.question("가격 : "));
      const quantity: number = parseInt(readlineSync.question("수량 : "));

      orders[i] = ProductOrderMain3.createOrder(productName, price, quantity);
    }

    ProductOrderMain3.printOrders(orders);

    const totalAmount = ProductOrderMain3.getTotalAmount(orders);
    console.log(`총 결제 금액 : ${totalAmount}`);
  }

  static createOrder(
    productName: string,
    price: number,
    quantity: number
  ): ProductOrder {
    let order: ProductOrder = new ProductOrder();
    order.productName = productName;
    order.price = price;
    order.quantity = quantity;

    return order;
  }

  static printOrders(orders: ProductOrder[]) {
    for (const order of orders) {
      console.log(
        `상품명 : ${order.productName}, 가격 : ${order.price}, 수량 : ${order.quantity}`
      );
    }
  }

  static getTotalAmount(orders: ProductOrder[]): number {
    let totalAmount = 0;

    for (const order of orders) {
      totalAmount += order.price * order.quantity;
    }

    return totalAmount;
  }
}

new ProductOrderMain3();

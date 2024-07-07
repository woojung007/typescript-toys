import ProductOrder from "./ProductOrder";

class ProductOrderMain2 {
  constructor() {
    this.main();
  }

  public main() {
    // let orders: ProductOrder[] = [];
    let orders: ProductOrder[] = new Array(3).fill(new ProductOrder());

    orders[0] = ProductOrderMain2.createOrder("두부", 2000, 2);
    orders[1] = ProductOrderMain2.createOrder("김치", 5000, 1);
    orders[2] = ProductOrderMain2.createOrder("콜라", 1500, 2);

    ProductOrderMain2.printOrders(orders);

    const totalAmount = ProductOrderMain2.getTotalAmount(orders);
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

new ProductOrderMain2();

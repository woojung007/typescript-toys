import Item from "./Item";

export default class ShoppingCart {
  items: Item[] = new Array(10).fill(new Item());
  itemCount: number = 0;

  addItem(item: Item) {
    if (this.itemCount >= this.items.length) {
      console.log("장바구니가 가득 찼습니다.");
      return;
    }

    this.items[this.itemCount] = item;
    this.itemCount++;
  }

  displayItems() {
    console.log("장바구니 상품 출력");

    for (let i = 0; i < this.itemCount; i++) {
      const item = this.items[i];
      console.log(
        "상품명 : ",
        item.getName(),
        ", 합계 : ",
        item.getTotalPrice()
      );
    }

    console.log("전체 가격 합 : ", this.calculateTotalPrice());
  }

  private calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.itemCount; i++) {
      const item = this.items[i];
      totalPrice += item.getTotalPrice();
    }

    return totalPrice;
  }
}

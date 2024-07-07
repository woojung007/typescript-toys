export default class Item {
  name: string;
  price: number;
  quantity: number;

  constructor(name?: string, price?: number, quantity?: number) {
    this.name = name ?? "";
    this.price = price ?? 0;
    this.quantity = quantity ?? 0;
  }

  getName() {
    return this.name;
  }

  getTotalPrice(): number {
    return this.price * this.quantity;
  }
}

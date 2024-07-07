export default class Item {
  private name: string = "";
  private price: number = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log("이름 : ", this.name, ", 가격 : ", this.price);
  }

  getPrice() {
    return this.price;
  }
}

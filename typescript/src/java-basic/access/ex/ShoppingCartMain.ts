import Item from "./Item";
import ShoppingCart from "./ShoppingCart";

class ShoppingCartMain {
  constructor() {
    this.main();
  }

  main() {
    const cart = new ShoppingCart();

    const item1 = new Item("마늘", 2000, 2);
    const item2 = new Item("상추", 3000, 4);

    cart.addItem(item1);
    cart.addItem(item2);

    cart.displayItems();
  }
}

new ShoppingCartMain();

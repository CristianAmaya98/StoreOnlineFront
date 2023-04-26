import { CounterShoppingCart } from "../helpers/selectores";
import { Product } from "../models";

class ShoppingCart {
  constructor() {
    this.shoppingProducts = [];
    this.keyStorage = "shopping";
    this._initShoppingCart();
  }

  _initShoppingCart() {
    this.shoppingProducts =
      JSON.parse(localStorage.getItem(this.keyStorage)) ?? [];

    this.counterShopping();
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.shoppingProducts = [product, ...this.shoppingProducts];
      localStorage.setItem(
        this.keyStorage,
        JSON.stringify(this.shoppingProducts)
      );
      this.counterShopping();
    }
  }

  counterShopping() {
    CounterShoppingCart.textContent = this.shoppingProducts?.length ?? 0;
  }
}

export default ShoppingCart;

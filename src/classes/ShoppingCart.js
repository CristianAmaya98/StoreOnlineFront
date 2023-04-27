import { header } from "../helpers/selectores";
import { Product } from "../models";

class ShoppingCart {
  constructor() {
    this.shoppingProducts = [];
    this.keyStorage = "shopping";
    this._initShoppingCart();
    this.counterShoppingCartSelector = header.querySelector(
      "#count-shopping span.header__navigation-count"
    );
  }

  _initShoppingCart() {
    this.shoppingProducts =
      JSON.parse(localStorage.getItem(this.keyStorage)) ?? [];
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
    this.counterShoppingCartSelector.textContent =
      this.shoppingProducts?.length ?? 0;
  }
}

export default ShoppingCart;

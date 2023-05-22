import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingProducts: any[] = [];
  private keyStorage = "shopping";


  public get counterShopping(): number {
    return this.shoppingProducts?.length || 0
  }


  constructor() {
    this._initShoppingCart();
  }

  _initShoppingCart() {
    this.shoppingProducts =
      JSON.parse(localStorage.getItem(this.keyStorage)!) ?? [];
  }

  addProduct(product: any) {
    if (this.verificateProduct(product.id)) {
      this.shoppingProducts = this.updateAmountProduct(product);
    } else {
      this.shoppingProducts = [product, ...this.shoppingProducts];
    }

    localStorage.setItem(
      this.keyStorage,
      JSON.stringify(this.shoppingProducts)
    );
  }

  updateAmountProduct(product: any) {
    return this.shoppingProducts.map(productShopping => {
      if (productShopping.id === product.id) {
        productShopping.cantidad += 1;
        productShopping.total = productShopping.price * productShopping.cantidad;
      }
      return productShopping;
    });
  }

  verificateProduct(id: number) {
    return this.shoppingProducts.some(productShopping => productShopping.id === id)
  }

  getAllProductShopping() {
    return JSON.parse(localStorage.getItem(this.keyStorage)!) ?? []
  }


  deleteProductShopping(productDelete: any) {
    this.shoppingProducts = this.shoppingProducts.filter(product => product.id !== productDelete.id);
    localStorage.setItem(
      this.keyStorage,
      JSON.stringify(this.shoppingProducts)
    );
  }
}

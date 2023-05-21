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
    this.shoppingProducts = [product, ...this.shoppingProducts];
    localStorage.setItem(
      this.keyStorage,
      JSON.stringify(this.shoppingProducts)
    );
  }


}

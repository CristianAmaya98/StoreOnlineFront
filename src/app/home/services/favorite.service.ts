import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoriteProducts: any[] = [];
  private keyStorage: string = 'favorite';



  public get counterFavorite() : number {
    return this.favoriteProducts?.length || 0
  }


  constructor() {
    this._initFavoriteProducts();
  }

  _initFavoriteProducts() {
    this.favoriteProducts = JSON.parse(localStorage.getItem(this.keyStorage)!) ?? []
  }


  addProductFavorite(product: any) {
    if (this.verificateProductFavorite(product.id)) {
      this.deleteProductFavorite(product)
    } else {
      this.favoriteProducts = [product, ...this.favoriteProducts];
      localStorage.setItem(this.keyStorage, JSON.stringify(this.favoriteProducts));
    }
  }


  verificateProductFavorite(id: number) {
    return this.favoriteProducts.some(favoriteProduct => favoriteProduct.id === id);
  }

  deleteProductFavorite(product: any) {
    this.favoriteProducts = this.favoriteProducts.filter(favoriteProduct => favoriteProduct.id !== product.id)
    localStorage.setItem(this.keyStorage, JSON.stringify(this.favoriteProducts));
  }
}

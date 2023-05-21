import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoriteProducts: any[] = [];
  private keyStorage: string = 'favorite';


  constructor() {
    this._initFavoriteProducts();
  }

  _initFavoriteProducts() {
    this.favoriteProducts = JSON.parse(localStorage.getItem(this.keyStorage)!) ?? []
  }


  addProductFavorite(product: any) {
    
  }
}

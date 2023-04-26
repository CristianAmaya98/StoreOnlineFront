import { CounterFavorite } from "../helpers/selectores";
import { Product } from "../models";

class Favorite {
  constructor() {
    this.favoriteProducts = [];
    this.keyStorage = "favorite";
    this._initFavorite();
  }

  _initFavorite() {
    this.favoriteProducts =
      JSON.parse(localStorage.getItem(this.keyStorage)) ?? [];
    this.counterFavorite();
  }

  addFavorite(product) {
    if (product instanceof Product) {
      if (!this.verifyIDFavorite(product.id)) {
        this.favoriteProducts = [product, ...this.favoriteProducts];
        localStorage.setItem(
          this.keyStorage,
          JSON.stringify(this.favoriteProducts)
        );

        this.counterFavorite();
        return;
      }

      this.deleteFavorite(product.id)
    }
  }

  verifyIDFavorite(idSearch) {
    return this.favoriteProducts.some(
      (product) => product.id === Number(idSearch)
    );
  }

  deleteFavorite(id) {
    this.favoriteProducts = this.favoriteProducts.filter(
      (product) => product.id !== Number(id)
    );

    localStorage.setItem(
      this.keyStorage,
      JSON.stringify(this.favoriteProducts)
    );
    this.counterFavorite();
  }

  counterFavorite() {
    CounterFavorite.textContent = this.favoriteProducts?.length ?? 0;
  }
}

export default Favorite;

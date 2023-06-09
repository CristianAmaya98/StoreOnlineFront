import { Component } from '@angular/core';
import { ShoppingCartService } from './home/services/shopping-cart.service';
import { FavoriteService } from './home/services/favorite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalShow: boolean = false;
  modalData: any = {}

  constructor(private ShoppingCartService: ShoppingCartService, private favoriteService: FavoriteService) { }

  eventHeaderIcon(event: string) {
    this.modalShow = !this.modalShow;
    if (event === 'shopping') {
      this.initShoppingData();
    } else {
      this.initFavoriteData();
    }
  }

  closeModal() {
    this.modalShow = !this.modalShow;
  }

  onEventCardIcon({ cardType, product}: any) {
    if (cardType === 'shopping') {
      this.ShoppingCartService.deleteProductShopping(product)
      this.initShoppingData()
    } else {
      this.favoriteService.deleteProductFavorite(product);
      this.initFavoriteData();
    }
  }

  initShoppingData() {
    const products = this.ShoppingCartService.getAllProductShopping()

    this.modalData = {
      card: 'shopping',
      header: {
        title: 'Carrito',
        show: true
      },
      body: {
        products,
        defautl: 'No has agregado productos al carrito.'
      },
      footer: {
        data: {
          title: 'Total:',
          content: this.calculateTotal(products.map((product: any) => product.total)),
        },
        buttonName: 'Comprar',
        show: true
      }
    }
  }


  initFavoriteData() {
    const products = this.favoriteService.getAllProductFavorite()

    this.modalData = {
      card: 'favorite',
      header: {
        title: 'Favorito',
        show: true
      },
      body: {
        products,
        defautl: 'No tiene producto en favorito.'
      },
      footer: {
        show: false
      }
    }
  }


  calculateTotal(prices = []) {
    return prices.reduce((total, price) => total += price, 0).toLocaleString('es-ES')
  }
}



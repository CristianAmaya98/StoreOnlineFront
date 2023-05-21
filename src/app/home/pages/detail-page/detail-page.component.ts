import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FakeStoreService } from '../../services/fake-store.service';
import { buttonActions } from 'src/app/storeonline.const';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { FavoriteService } from '../../services/favorite.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit, OnDestroy {

  animation: boolean = true;
  private idProduct !: number;


  _buttons: any[] = [
    {
      title: "Comprar Ahora",
      icon: 'comprar',
      event: buttonActions.COMPRAR,
      check: false
    },
    {
      title: "Agregar al Carrito",
      icon: 'carrito',
      event: buttonActions.AGREGAR,
      check: false
    },
    {
      title: "Agregar a Favorito",
      icon: 'favorito',
      event: buttonActions.FAVORITO,
      check: false
    }
  ]


  public get productToCategory(): any[] {
    return this.fakeStoreService.products
  }


  public get product(): any {
    return this.fakeStoreService.product;
  }


  public get buttons(): any[] {
    return this._buttons;
  }



  constructor(
    private activatedRoute: ActivatedRoute,
    private fakeStoreService: FakeStoreService,
    private shoppingCartService: ShoppingCartService,
    private favoriteService: FavoriteService
  ) { }


  ngOnDestroy(): void {
    this.fakeStoreService.resetFakeStore()
  }




  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(paramsUrl => {
        if (this.idProduct && this.idProduct !== Number(paramsUrl['id'])) {
          this.animation = true;
        }
        this.fakeStoreService.getDetalleProduct(paramsUrl['id']);
        this.idProduct = Number(paramsUrl['id'])
      })
    )
      .subscribe(() => {
        this._buttons[1].check = this.shoppingCartService.verificateProduct(this.idProduct)
        this._buttons[1].title = this._buttons[1].check ? "Quitar del Carrito" : "Agregar al Carrito"

        this._buttons[2].check = this.favoriteService.verificateProductFavorite(this.idProduct)
        this._buttons[2].title = this._buttons[2].check ? "Quitar de Favorito" : "Agregar a Favorito"


        setTimeout(() => {
          this.product?.category && this.fakeStoreService.getOtherProductToCategory(this.product?.category, this.idProduct);
          this.animation = false;
        }, 1500);
      })
  }




  eventButtonAction(eventButtonAction: any) {

    switch (eventButtonAction) {
      case buttonActions.FAVORITO:
        const { id, image, price, title } = this.product;
        this.favoriteService.addProductFavorite({ id, image, price, title })
        this._buttons[2].check = this.favoriteService.verificateProductFavorite(Number(id))
        this._buttons[2].title = this._buttons[2].check ? "Quitar de Favorito" : "Agregar a Favorito"
        break;
    }

  }
}

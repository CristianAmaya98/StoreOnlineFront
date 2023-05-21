import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FakeStoreService } from '../../services/fake-store.service';
import { buttonActions } from 'src/app/storeonline.const';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  animation: boolean = true;
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

  public get product(): any {
    return this.fakeStoreService.product;
  }


  public get buttons(): any[] {
    return this._buttons;
  }



  constructor(
    private activatedRoute: ActivatedRoute,
    private fakeStoreService: FakeStoreService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsUrl => {
      this.fakeStoreService.getDetalleProduct(paramsUrl['id']);
      setTimeout(() => {
        this.animation = false;


        this._buttons[1].check = this.shoppingCartService.verificateProduct(Number(paramsUrl['id']))
        this._buttons[1].title = this._buttons[1].check ? "Quitar del Carrito" : "Agregar al Carrito"
      
      }, 1000);
    })
  }


  eventButtonAction(eventButtonAction: any) {
    console.log({ eventButtonAction });

  }
}

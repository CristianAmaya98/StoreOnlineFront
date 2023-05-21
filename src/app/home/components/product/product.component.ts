import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product !: any;
  @Input() buttonVisible: boolean = true;

  constructor(private shoppingCartService: ShoppingCartService) { }


  addProductShopping(product: any) {
    const { id, image, price, title } = product;
    this.shoppingCartService.addProduct({ id, image, price, title, cantidad: 1 })
  }
}

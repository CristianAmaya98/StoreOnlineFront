import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/home/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public get counterShopping(): number {
    return this.shoppingCartService.counterShopping;
  }

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}

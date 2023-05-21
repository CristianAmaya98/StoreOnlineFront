import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FavoriteService } from 'src/app/home/services/favorite.service';
import { ShoppingCartService } from 'src/app/home/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onEventButton: EventEmitter<string> = new EventEmitter<string>();

  public get counterShopping(): number {
    return this.shoppingCartService.counterShopping;
  }


  public get counterFavorite(): number {
    return this.favoriteService.counterFavorite;
  }


  constructor(private shoppingCartService: ShoppingCartService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }


  iconEvent(atributeEvent: string) {
    this.onEventButton.emit(atributeEvent)
  }
}

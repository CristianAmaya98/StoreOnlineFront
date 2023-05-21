import { Component, OnInit } from '@angular/core';
import { buttonActions } from 'src/app/storeonline.const';

@Component({
  selector: 'app-buttons-actions',
  templateUrl: './buttons-actions.component.html',
  styleUrls: ['./buttons-actions.component.css']
})
export class ButtonsActionsComponent implements OnInit {

  buttons = [
    {
      title: "Comprar Ahora",
      icon: 'comprar',
      event: buttonActions.COMPRAR
    },
    {
      title: "Agregar al Carrito",
      icon: 'carrito',
      event: buttonActions.AGREGAR
    },
    {
      title: "Agregar a Favorito",
      icon: 'favorito',
      event: buttonActions.FAVORITO
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

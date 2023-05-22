import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent {

  @Input() cardType: 'shopping' | 'favorite' = 'favorite';
  @Input() product: any = {};
  @Output() onEventCardIcon: EventEmitter<any> = new EventEmitter<any>();


  eventButtonCard(cardType: any) {
    this.onEventCardIcon.emit({ cardType, product: this.product })
  }
}

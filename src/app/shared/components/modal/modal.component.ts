import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ShoppingCartService } from '../../../home/services/shopping-cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  animationClose: boolean = false;
  products: any[] = [];
  @Input() modalData: any = {
    card: 'favorite',
    header: {
      title: '',
      show: true
    },
    body: {
      products: [],
      defautl: ''
    },
    footer: {
      data: {
        title: '',
        content: '',
      },
      buttonName: 'Comprar',
      show: true
    }
  };
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEventCardIcon: EventEmitter<any> = new EventEmitter<any>();





  onEventListener(dataCard: any) {
    this.onEventCardIcon.emit(dataCard)
  }



  closeModal() {
    this.animationClose = !this.animationClose;

    setTimeout(() => {
      this.onCloseModal.emit();
    }, 800);
  }

  eventPayButton() {
    console.log('Clickkk Payyyyyy');
  }
}

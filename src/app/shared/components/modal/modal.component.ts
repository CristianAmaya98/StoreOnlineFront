import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../../home/services/shopping-cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  animationClose: boolean = false;
  products: any[] = [];
  @Input() modalData: any = {
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




  ngOnInit(): void {
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

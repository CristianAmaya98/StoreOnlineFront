import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  animationClose: boolean = false;

  @Output() onCloseModal: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }




  closeModal() {
    this.animationClose = !this.animationClose;

    setTimeout(() => {
      this.onCloseModal.emit();
    }, 800);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalShow: boolean = true;

  eventHeaderIcon(event: string) {
    this.modalShow = !this.modalShow;
    console.log({ event });
  }

  closeModal() {
    this.modalShow = !this.modalShow;
  }
}

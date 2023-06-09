import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AnimationComponent } from './components/animation/animation.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AnimationComponent,
    NotificationComponent,
    ModalComponent,
    ModalCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AnimationComponent,
    NotificationComponent,
    ModalComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AnimationComponent } from './components/animation/animation.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AnimationComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AnimationComponent,
    NotificationComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AnimationComponent } from './components/animation/animation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AnimationComponent
  ]
})
export class SharedModule { }

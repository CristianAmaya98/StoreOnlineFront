import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrerComponent } from './pages/registrer/registrer.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioErrorInputComponent } from './components/formulario-error-input/formulario-error-input.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegistrerComponent,
    LoginComponent,
    FormularioLoginComponent,
    FormularioErrorInputComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }

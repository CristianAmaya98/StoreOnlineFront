import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { objMessage } from 'src/app/storeonline.const';
import { CredentialUser } from '../../interfaces/credential.interface';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  @Output() onVerificarSesion: EventEmitter<CredentialUser> = new EventEmitter<CredentialUser>();

  formularioLogin: FormGroup = this.formBuider.group({
    username: ['mor_2314', [Validators.required, Validators.minLength(4)]],
    password: ['83r5^_', [Validators.required, Validators.minLength(4)]]
  })

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
  }


  validateCampoForm(inputForm: string) {
    return this.formularioLogin.controls[inputForm].touched && this.formularioLogin.controls[inputForm].errors
  }

  showErrorsFormCampo(inputForm: string) {
    return Object.keys(this.formularioLogin.controls[inputForm].errors ?? []).map((typeError: string) => {
      return objMessage[typeError] ?? typeError;
    });
  }

  verificarCredentials() {
    if (this.formularioLogin.invalid) {
      return;
    }

    this.onVerificarSesion.emit(this.formularioLogin.value);
  }
}

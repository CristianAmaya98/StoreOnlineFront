import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-error-input',
  templateUrl: './formulario-error-input.component.html',
  styleUrls: ['./formulario-error-input.component.css']
})
export class FormularioErrorInputComponent {

  @Input() title: string = '';

}

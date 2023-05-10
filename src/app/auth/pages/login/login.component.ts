import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CredentialUser } from '../../interfaces/credential.interface';
import { Router } from '@angular/router';
import { Notification } from '../../interfaces/notification.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showSpinner: boolean = false;

  _notificationObj: Notification = {
    title: '',
    message: '',
    typeNotification: 'error',
    visible: false
  }


  public get notification(): Notification {
    return this._notificationObj
  }


  constructor(private authService: AuthService, private router: Router) { }


  verificationUser(userCredencial: CredentialUser) {
    this.showSpinner = true;
    this.authService.verifyCredential(userCredencial).subscribe(validCredential => {

      setTimeout(() => {
        this.showSpinner = false;

        this._notificationObj.title = `Verificación ${(validCredential) ? 'Existosa' : 'Fallida'}`;
        this._notificationObj.message = `Verificación de usuario ${(validCredential) ? 'realizada correctamente' : 'fallo Intente Nuevamente'}`;
        this._notificationObj.typeNotification = (validCredential) ? 'sucess' : 'error';
        this._notificationObj.visible = true;

        setTimeout(() => {
          this._notificationObj.title = '';
          this._notificationObj.message = '';
          this._notificationObj.typeNotification = 'error';
          this._notificationObj.visible = false;

          this.router.navigateByUrl('/home')
        }, 3000);


      }, 3000);

    })

  }
}

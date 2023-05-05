import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CredentialUser } from '../../interfaces/credential.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showSpinner: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.verifyCredential({ username: 'mor_2314', password: '83r5^_'})
  }


  verificationUser(userCredencial: CredentialUser) {
    console.log(userCredencial);
    this.showSpinner = true;
    setTimeout(() => {
      console.log('Timeout');

      this.showSpinner = false;
    }, 3000);
  }
}

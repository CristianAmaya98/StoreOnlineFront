import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CredentialUser } from '../interfaces/credential.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;

  constructor(private _http: HttpClient) { }


  verifyCredential(credentialUser: CredentialUser) {
    this._http.post(`${this.url}/auth/login`, credentialUser).subscribe(response => {
      console.log(response);
    })
  }

}

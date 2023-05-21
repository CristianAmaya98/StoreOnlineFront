import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CredentialUser } from '../interfaces/credential.interface';
import { TokenService } from 'src/app/shared/services/token.service';
import { Observable, delay, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;

  constructor(private _http: HttpClient, private tokenService: TokenService) { }


  verifyCredential(credentialUser: CredentialUser): Observable<any> {
    return this._http.post(`${this.url}/auth/login`, credentialUser)
      .pipe(
        map((response: any) => {
          const token: string = response?.token as string;
          this.tokenService.saveToken(token);
          return token !== '';
        })
      ).pipe(delay(500));
  }


}

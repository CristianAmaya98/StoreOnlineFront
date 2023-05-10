import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private keyStore: string = 'token';

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem(this.keyStore, token);
  }

  validateToken(): boolean {
    return localStorage.getItem(this.keyStore) !== null ? true : false
  }
}

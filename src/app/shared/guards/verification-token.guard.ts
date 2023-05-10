import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/shared/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationTokenGuard implements  CanLoad {

  constructor(private tokenService: TokenService, private router: Router) {}

  canLoad(): Observable<boolean> | boolean {
    return this.routingHomeValidateToken();
  }


  routingHomeValidateToken() {
    const validToken = this.tokenService.validateToken()
    console.log({ validToken });
    if (validToken) {
      this.router.navigateByUrl('/home')
      return false;
    }

    return true;
  }
}

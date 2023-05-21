import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationSeccionGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(): Observable<boolean> | boolean {
    const validSection = this.tokenService.validateToken()

    if (!validSection) {
      this.router.navigateByUrl('/auth')
    }

    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    const validSection = this.tokenService.validateToken()

    if (!validSection) {
      this.router.navigateByUrl('/auth')
    }
    return true;
  }
}

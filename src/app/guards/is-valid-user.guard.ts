import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class IsValidUserGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.isUserValid()) {
      return true;
    }
    this.router.navigate(['job']);
    return false;
  }
  isUserValid(): boolean {
    return sessionStorage.getItem('isValid') === 'true';
  }
}

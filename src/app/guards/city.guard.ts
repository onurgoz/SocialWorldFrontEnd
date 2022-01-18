import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { CompanyService } from '../services/company.service';

@Injectable({
  providedIn: 'root'
})
export class CityGuard implements CanActivate {
  constructor(private router: Router, private companyService: CompanyService){

  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    if (await this.companyService.ifUserHaveCity()){
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private alertifyService: AlertifyService) {}
  photoString?: string;
  isLoggedIn(): boolean {
    return this.accountService.isLoggedIn();
  }
  loogedUser(): string {
    return '' + sessionStorage.getItem('loggedUser');
  }
  logout(): void {
    this.accountService.logout();
    this.alertifyService.warning('Çıkış yapıldı');
    this.router.navigate(['login']);
  }
  isUserHaveCompany(): boolean {
    return sessionStorage.getItem('hasCompany') != null;
  }
  isUserHaveCity(): boolean {
    return sessionStorage.getItem('hasCity') != null;
  }

  isUserValid(): boolean {
    return sessionStorage.getItem('isValid') === 'true';
  }

  isUserHavePhotoString(): boolean {
    return sessionStorage.getItem('photoString') !== null && sessionStorage.getItem('photoString') !== '';
  }
  getRoles(): boolean {

    return sessionStorage.getItem('role') === 'Admin' ? true : false;
  }

  ngOnInit(): void{
    if (this.isUserHavePhotoString()){
      this.photoString = sessionStorage.getItem('photoString') || '';
    }
  }
}

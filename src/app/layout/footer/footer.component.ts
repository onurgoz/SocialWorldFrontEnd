import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private alertifyService: AlertifyService) { }
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
  ngOnInit(): void {
  }

}

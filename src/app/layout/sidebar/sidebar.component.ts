import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private readonly onDestroy = new Subject<void>();
  constructor() {}


  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') != null;
  }
  isUserHaveCompany(): boolean {
    return sessionStorage.getItem('hasCompany') != null;
  }
  getRoles():boolean{

    return sessionStorage.getItem('role')=='Admin'?true:false;
  }
  ngOnInit(): void {}
}

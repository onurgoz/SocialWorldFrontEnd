import { Component } from '@angular/core';
import { UserGuard } from './guards/user.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  constructor(){}
  isLoggedIn(): boolean{
    return sessionStorage.getItem('token') != null;
  }
}

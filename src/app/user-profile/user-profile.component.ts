import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }
    user:User= new User;
  getUserDetails(userId: number): void{
    this.accountService.getUserDetails(userId).subscribe(data =>{
      this.user=data;
    });
    console.log(this.user.email);
  }

  ngOnInit(): void {
    this.getUserDetails(Number(sessionStorage.getItem('userId')));
    console.log(this.user.email);
  }

}

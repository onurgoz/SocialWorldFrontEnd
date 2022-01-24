import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  [x: string]: any;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertifyService: AlertifyService,
    private router: Router,
  ) { }
editUserForm!: FormGroup;
    user: User = new User();
    userId!: number;
    isValid!: boolean;
  createEditUserForm(): void{
    this.editUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      nationalityId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      photoString: [''],
      password: ['', Validators.required],
    });
  }
  async editUser(): Promise<void>{
  if (this.editUserForm.valid)
  {
    this.user = Object.assign({}, this.editUserForm.value);
  }
  this.user.id = this.userId;
  await this.accountService.editUser(this.user).then(() => {
    this.alertifyService.success('Kullanıcı Güncellendi.');
    this.router.navigate(['user_profile']);
  })
  .catch(err => {
    this.alertifyService.error(err);
  });
}
  isUserValid(): boolean {
    return sessionStorage.getItem('isValid') === 'true';
  }
  async editValidation(): Promise<void> {
    this.alertifyService.success('Kimlik bilgileriniz doğrulanıyor lütfen çıkış yapınız.');
    await this.accountService.editUserValidation(this.userId).toPromise();

  }


  getUserDetails(userId: number): void{
    this.accountService.getUserDetails(userId).subscribe(data => {
      this.editUserForm.patchValue(data);
      this.user = data;
    });

  }



  ngOnInit(): void {
    this.createEditUserForm();
    this.userId = Number(sessionStorage.getItem('userId'));
    this.getUserDetails(this.userId);

  }

}

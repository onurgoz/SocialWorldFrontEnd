import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { UserRegisterModel } from '../models/user-register-model';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private companyService: CompanyService,

  ) {}
  registerForm!: FormGroup;
  model: UserRegisterModel = new UserRegisterModel();

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      nationalityId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }




  async register(): Promise<void> {
    if (this.registerForm.valid) {
      this.model = Object.assign({}, this.registerForm.value);
      console.log(this.model);
    }
    await this.accountService
      .register(this.model)
      .then(async () => {
        await this.accountService.login({
          email: this.model.email,
          password: this.model.password,
        });
      })
      .then(() => {
        this.alertifyService.success(this.model.email + ' kayıt yaptı');
        this.router.navigate(['']);
      })
      .catch(() => {
        this.alertifyService.error('kayıt başarısız');
      });
  }
  ngOnInit(): void {
    this.createRegisterForm();
  }
}

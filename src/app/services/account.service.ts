import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';
import { Company } from '../models/company';
import { Role } from '../models/role-models';
import { User } from '../models/user';
import { UserLoginModel } from '../models/user-login-model';
import { UserRegisterModel } from '../models/user-register-model';
import { CompanyService } from './company.service';

@Injectable()
export class AccountService {
  constructor(
    private http: HttpClient,
    private companyService: CompanyService
  ) {

  }
  city!:Company[];
  authPath = 'http://localhost:56183/api/auth/';
  userPath = 'http://localhost:56183/api/user/';
  roles!:Role[];
  loginUser!:User;
  httpOptions = {};
  async login(user: UserLoginModel): Promise<any> {
    return this.http
      .post<any>(this.authPath + 'signin', user, this.httpOptions)
      .toPromise()
      .then(async (data) => {
        sessionStorage.setItem('loggedUser', user.email);
        sessionStorage.setItem('token', data.token);
        this.setHttpOptions();
        this.loginUser = (await this.getActiveUser());
        if (this.loginUser.photoString != null && this.loginUser.photoString !== ''){
          sessionStorage.setItem('photoString', this.loginUser.photoString);
        }
        sessionStorage.setItem('userId', this.loginUser.id.toString());

        sessionStorage.setItem('isValid', this.loginUser.isValid.toString());

      })
      .then(async () => {
        const ifUserHaveCompany = await this.companyService.ifUserHaveCompany();
        this.companyService.getUserCity().subscribe(data => { this.city = data; });
        if (ifUserHaveCompany) {
          sessionStorage.setItem('hasCompany', 'true');
        }
      }).then(async (data) => {
        const ifUserHaveCity = await this.companyService.ifUserHaveCity();
        if (ifUserHaveCity) {
          sessionStorage.setItem('hasCity', 'true');
          sessionStorage.setItem('cityId', String(this.city[0].id));
        }
      });
  }



  async getRoles(user: UserLoginModel): Promise<any> {
    return await this.http.get<Role[]>(this.authPath +"getroles?Email="+user.email,this.httpOptions).toPromise().then(res => {

      res.forEach((role) => {

        if (role.name === 'Admin')
        {
          sessionStorage.setItem('role', role.name);
        }
        else
        {
          sessionStorage.setItem('role', role.name);
        }
      });


    }

    );

  }
  getUserDetails(userId: number): Observable<User>{
    this.setHttpOptions();
    return this.http.get<User>(this.userPath +"getuserdetails/"+userId,this.httpOptions);
  }

  editUserValidation(userId: number) : Observable<void>{
    this.setHttpOptions();
    return this.http.get<void>(
        this.userPath + "GetUserNationalityIdCheck/"+userId,this.httpOptions
      );
  }
  editUser(user: User): Promise<User> {
    this.setHttpOptions();
    return this.http
      .put<User>(
        this.userPath + "edituser",
        {
          Id: user.id,
          FirstName: user.firstName,
          LastName: user.lastName,
          Email: user.email,
          PhoneNumber: user.phoneNumber,
          PhotoString: user.photoString,
          NationalityId: user.nationalityId,
          DateOfBirth: user.dateOfBirth,
        },
        this.httpOptions
      )
      .toPromise();
  }

  async register(user: UserRegisterModel): Promise<any> {
    return this.http
      .post<any>(this.authPath + 'signup',
        {
          FirstName: user.firstName,
          LastName: user.lastName,
          Email: user.email,
          PhoneNumber: user.phoneNumber,
          PhotoString: user.photoString,
          NationalityId: user.nationalityId,
          DateOfBirth: user.dateOfBirth,
          Password: user.password
        }, this.httpOptions)
      .toPromise();
  }

  async getActiveUser(): Promise<User> {
    return await this.http
      .get<User>(this.authPath + 'getactiveuser', this.httpOptions)
      .toPromise();
  }
  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') != null;
  }

  logout(): void {
    sessionStorage.removeItem('loggedUser');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('hasCompany');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('hasCity');
    sessionStorage.removeItem('cityId');
    sessionStorage.removeItem('photoString');
    sessionStorage.removeItem('isValid');
  }

  private setHttpOptions(): void {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }
}

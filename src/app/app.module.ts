import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { UserGuard } from './guards/user.guard';
import { VolunteerGuard } from './guards/volunteer.guard';
import { EmployerGuard } from './guards/employer.guard';
import { JobComponent } from './job/job.component';
import { CompanyService } from './services/company.service';
import { AddJobComponent } from './company/company-job/add-job/add-job.component';
import { EditJobComponent } from './company/company-job/edit-job/edit-job.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { DetailJobComponent } from './job/detail-job/detail-job.component';
import { CompanyJobComponent } from './company/company-job/company-job.component';
import { JobFilterByCompanyIdPipe } from './pipes/job-filter-by-company-id.pipe';
import { ShortStringPipe } from './pipes/shortString.pipe';
import { FooterComponent } from './layout/footer/footer.component';
import { JobTypesComponent } from './job-types/job-types.component';
import { AddJobTypeComponent } from './job-types/add-job-type/add-job-type.component';
import { SocialResponsibilityComponent } from './social-responsibility/social-responsibility.component';
import { AddSocialResponsibilityComponent } from './social-responsibility/add-social-responsibility/add-social-responsibility.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityComponent } from './city/city.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { CityJobComponent } from './city/city-job/city-job.component';
import { CitySocialResponsibilityComponent } from './city/city-social-responsibility/city-social-responsibility.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { CompanySocialResponsibilityComponent } from './company/company-social-responsibility/company-social-responsibility.component';
import { AddSocialResponsibilityCityComponent } from './city/city-social-responsibility/add-social-responsibility-city/add-social-responsibility-city.component';
import { EditSocialResponsibilityCityComponent } from './city/city-social-responsibility/edit-social-responsibility-city/edit-social-responsibility-city.component';
import { EditJobCityComponent } from './city/city-job/edit-job-city/edit-job-city.component';
import { AddJobCityComponent } from './city/city-job/add-job-city/add-job-city.component';
import { EditSocialResponsibilityComponent } from './social-responsibility/edit-social-responsibility/edit-social-responsibility.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { DataTablesModule } from 'angular-datatables';
import { ApplicantFilterByJobIdPipe } from './pipes/applicant-filter-by-job-id.pipe';
import { AddSocialResponsibilityCompanyComponent } from './company/company-social-responsibility/add-social-responsibility-company/add-social-responsibility-company.component';
import { EditSocialResponsibilityCompanyComponent } from './company/company-social-responsibility/edit-social-responsibility-company/edit-social-responsibility-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    SidebarComponent,
    CompanyComponent,
    AddCompanyComponent,
    JobComponent,
    AddJobComponent,
    EditJobComponent,
    EditCompanyComponent,
    DetailJobComponent,
    CompanyJobComponent,
    JobFilterByCompanyIdPipe,
    ShortStringPipe,
    FooterComponent,
    JobTypesComponent,
    AddJobTypeComponent,
    SocialResponsibilityComponent,
    AddSocialResponsibilityComponent,
    UserProfileComponent,
    CityComponent,
    AddCityComponent,
    CityJobComponent,
    EditCityComponent,
    AddSocialResponsibilityCityComponent,
    EditSocialResponsibilityCityComponent,
    EditJobCityComponent,
    AddJobCityComponent,
    CompanySocialResponsibilityComponent,
    CitySocialResponsibilityComponent,
    EditSocialResponsibilityComponent,
    ApplicantComponent,
    ApplicantFilterByJobIdPipe,
    AddSocialResponsibilityCompanyComponent,
    EditSocialResponsibilityCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [
    AccountService,
    AlertifyService,
    UserGuard,
    VolunteerGuard,
    EmployerGuard,
    CompanyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

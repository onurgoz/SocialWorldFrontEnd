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
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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

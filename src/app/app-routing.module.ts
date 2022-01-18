import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { CompanyComponent } from './company/company.component';
import { JobComponent } from './job/job.component';
import { EmployerGuard } from './guards/employer.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddJobComponent } from './company/company-job/add-job/add-job.component';
import { EditJobComponent } from './company/company-job/edit-job/edit-job.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { UserGuard } from './guards/user.guard';
import { DetailJobComponent } from './job/detail-job/detail-job.component';
import { CompanyJobComponent } from './company/company-job/company-job.component';
import { AddJobTypeComponent } from './job-types/add-job-type/add-job-type.component';
import { JobTypesComponent } from './job-types/job-types.component';
import { SocialResponsibilityComponent } from './social-responsibility/social-responsibility.component';
import { AddSocialResponsibilityComponent } from './social-responsibility/add-social-responsibility/add-social-responsibility.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CityJobComponent } from './city/city-job/city-job.component';
import { AddJobCityComponent } from './city/city-job/add-job-city/add-job-city.component';
import { AddSocialResponsibilityCityComponent } from './city/city-social-responsibility/add-social-responsibility-city/add-social-responsibility-city.component';
import { EditSocialResponsibilityCityComponent } from './city/city-social-responsibility/edit-social-responsibility-city/edit-social-responsibility-city.component';
import { EditJobCityComponent } from './city/city-job/edit-job-city/edit-job-city.component';
import { CitySocialResponsibilityComponent } from './city/city-social-responsibility/city-social-responsibility.component';
import { CityGuard } from './guards/city.guard';
import { AdminGuard } from './guards/admin.guard';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', redirectTo: 'job', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'company/add_company',
    component: AddCompanyComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [UserGuard, EmployerGuard],
  },
  {
    path: 'company/edit_company/:id',
    component: EditCompanyComponent,
    canActivate: [UserGuard, EmployerGuard],
  },
  {
    path: 'company/:companyId/add_job',
    component: AddJobComponent,
    canActivate: [UserGuard, EmployerGuard],
  },
  {
    path: 'company/:companyId',
    component: CompanyJobComponent,
    canActivate: [UserGuard, EmployerGuard],
  },
  {
    path: 'company/:companyId/edit_job/:jobId',
    component: EditJobComponent,
    canActivate: [UserGuard, EmployerGuard],
  },
  {
    path: 'job/:id',
    component: DetailJobComponent,
    canActivate: [UserGuard],
  },
  { path: 'job', component: JobComponent, canActivate: [UserGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'job_type/add_job_types',
    component: AddJobTypeComponent,
    canActivate: [UserGuard, AdminGuard],
  },
  {
    path: 'job_type',
    component: JobTypesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'social_responsibility',
    component: SocialResponsibilityComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'social_responsibility/add_social_responsibility',
    component: AddSocialResponsibilityComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'user_profile',
    component: UserProfileComponent,
    canActivate: [UserGuard],
  },
  {
    path: '/city',
    component: CityComponent,
    canActivate: [UserGuard, CityGuard],
  },
  {
    path: 'city/city-social-responsibility',
    component: CitySocialResponsibilityComponent,
    canActivate: [UserGuard, CityGuard],
  },
  {
    path: 'city/city-social-responsibility/add-social-responsibility',
    component: AddSocialResponsibilityCityComponent,
    canActivate: [UserGuard, CityGuard],
  },
  {
    path: 'city/city-social-responsibility/edit-social-responsibility',
    component: EditSocialResponsibilityCityComponent,
    canActivate: [UserGuard, CityGuard],
  },
  {
    path: '/city/city-job',
    component: CityJobComponent,
    canActivate: [UserGuard, CityGuard],
  },
  {
    path: '/city/city-job/add-job',
    component: AddJobCityComponent,
    canActivate: [UserGuard, CityGuard],
  },
  {
    path: '/city/city-job/edit-job',
    component: EditJobCityComponent,
    canActivate: [UserGuard, CityGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

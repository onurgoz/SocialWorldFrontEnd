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
import { JobType } from './models/job-type';
import { JobTypesComponent } from './job-types/job-types.component';
import { SocialResponsibilityComponent } from './social-responsibility/social-responsibility.component';
import { AddSocialResponsibilityComponent } from './social-responsibility/add-social-responsibility/add-social-responsibility.component';

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
    canActivate: [UserGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CompanyService } from 'src/app/services/company.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-edit-social-responsibility',
  templateUrl: './edit-social-responsibility.component.html',
  styleUrls: ['./edit-social-responsibility.component.scss']
})
export class EditSocialResponsibilityComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private jobService: JobService,
    private route: ActivatedRoute,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  jobId!: number;
  companyId!: number;
  jobTypeSelectedId!: number;
  editJobForm!: FormGroup;
  job: Job = new Job();
  createEditJobForm(): void {
    this.editJobForm = this.formBuilder.group({
      name: ['', Validators.required],
      explanation: ['', Validators.required],
      photoString: ['', Validators.required],
    });
  }

  async editJob(): Promise<void> {
    if (this.editJobForm.valid) {
      this.job = Object.assign({}, this.editJobForm.value);
    }
    this.job.id = this.jobId;
    this.job.appUserId = Number(sessionStorage.getItem('userId'));
    await this.jobService
      .editJob(this.job)
      .then(() => {
        this.alertifyService.success('Güncelleme başarılı');
        this.router.navigate(['city/social-responsibility']);
      })
      .catch(() => {
        this.alertifyService.error('Hata');
      });
  }
  ngOnInit(): void {
    this.jobId = this.route.snapshot.params.jobId;
    this.companyId = this.route.snapshot.params.companyId;
    this.createEditJobForm();
    this.jobService
      .getJob(this.jobId)
      .subscribe((data) => {
        this.editJobForm.patchValue(data);
        this.jobTypeSelectedId = data.jobTypeId;
      });
  }

}

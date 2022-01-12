import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';
import { Job } from '../models/job';
import { JobType } from '../models/job-type';
import { AlertifyService } from '../services/alertify.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-social-responsibility',
  templateUrl: './social-responsibility.component.html',
  styleUrls: ['./social-responsibility.component.scss']
})
export class SocialResponsibilityComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private jobService: JobService,
    private alertifyService: AlertifyService,
    private router: Router,
    private route: ActivatedRoute) { }

  addSocialResponsibilityForm!: FormGroup;
  job: Job = new Job();
  jobTypes!: JobType[];
  companies!: Company[];
  companyId!: number;
  createAddSocialResponsibilityForm(): void {
    this.addSocialResponsibilityForm = this.formBuilder.group({
      name: ['', Validators.required],
      photoString: ['', Validators.required],
      explanation: ['', Validators.required],
    });
  }

  addSocialResponsibility(): void {
    this.companyId = this.route.snapshot.params.companyId;
    if (this.addSocialResponsibilityForm.valid) {

      this.job = Object.assign({}, this.addSocialResponsibilityForm.value);
      if(this.companyId!=null) {
        this.job.companyId = this.companyId;
      }
      this.job.jobTypeId=9999
      this.job.appUserId = Number(sessionStorage.getItem('userId'));
      this.jobService.addJob(this.job).subscribe((data) => {
        this.alertifyService.success(data.name + ' eklendi');
        this.router.navigate(['company/' + this.companyId]);
      });
    } else {
      this.alertifyService.error("Lütfen alanları doğru şekilde doldurunuz.");
    }

  }

  ngOnInit(): void {
    this.createAddSocialResponsibilityForm();

  }

}

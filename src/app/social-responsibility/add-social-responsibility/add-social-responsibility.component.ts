import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Job } from 'src/app/models/job';
import { JobType } from 'src/app/models/job-type';
import { AlertifyService } from 'src/app/services/alertify.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-add-social-responsibility',
  templateUrl: './add-social-responsibility.component.html',
  styleUrls: ['./add-social-responsibility.component.scss']
})
export class AddSocialResponsibilityComponent implements OnInit {

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
      if (this.companyId != null) {
        this.job.companyId = this.companyId;
      }else{
        this.job.companyId =1;
      }
      this.job.jobTypeId = 9999
      this.job.appUserId = Number(sessionStorage.getItem('userId'));
      this.jobService.addJob(this.job).subscribe((data) => {
        this.alertifyService.success(data.name + ' eklendi');
        this.router.navigate(['social_responsibility']);
      });
    } else {
      this.alertifyService.error("Lütfen alanları doğru şekilde doldurunuz.");
    }

  }

  ngOnInit(): void {
    this.createAddSocialResponsibilityForm();

  }

}

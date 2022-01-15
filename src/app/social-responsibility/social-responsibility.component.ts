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

  constructor(
    private jobService: JobService,
    private router: Router,
  ) { }
  jobs!: Job[];
  getJobs(): void {
    this.jobService.GetAllJobsByJobTypeId(9999).subscribe((data) => {
      this.jobs = data;
    });
  }
  ngOnInit(): void {
    this.getJobs();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { AlertifyService } from 'src/app/services/alertify.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-company-social-responsibility',
  templateUrl: './company-social-responsibility.component.html',
  styleUrls: ['./company-social-responsibility.component.scss']
})
export class CompanySocialResponsibilityComponent implements OnInit {

  constructor(
    private jobService: JobService,
    private router: Router,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute
  ) { }
  companyId!: number;
  jobs!: Job[];

  deleteJob(id: number): void {
    this.jobService
      .deleteJob(id)
      .then(() => {
        this.getJobs();
        this.alertifyService.success('Silme başarılı');
        this.router.navigate(['company/' + this.companyId]);
      })
      .catch(() => {
        this.alertifyService.error('Hata');
      });
  }
  getJobs(): void {
    this.companyId = this.route.snapshot.params.companyId;
    this.jobService.GetAllJobsByJobTypeId(9999).subscribe((data) => {
      this.jobs = data;
    });
  }
  ngOnInit(): void {
    this.getJobs();
  }

}

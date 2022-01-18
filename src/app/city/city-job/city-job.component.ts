import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { AlertifyService } from 'src/app/services/alertify.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-city-job',
  templateUrl: './city-job.component.html',
  styleUrls: ['./city-job.component.scss']
})
export class CityJobComponent implements OnInit {

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
    this.companyId = Number(sessionStorage.getItem('cityId'));
    this.jobService.GetAllJobsByExceptThisJobTypeId(9999).subscribe((data) => {
      this.jobs = data;
    });
  }
  ngOnInit(): void {
    this.getJobs();
  }

}

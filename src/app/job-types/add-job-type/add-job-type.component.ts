import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobType } from 'src/app/models/job-type';
import { AlertifyService } from 'src/app/services/alertify.service';
import { JobTypeService } from 'src/app/services/job-type.service';

@Component({
  selector: 'app-add-job-type',
  templateUrl: './add-job-type.component.html',
  styleUrls: ['./add-job-type.component.scss']
})
export class AddJobTypeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private jobTypeService: JobTypeService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  addJobTypeForm!: FormGroup;
  jobType: JobType = new JobType();

  createAddJobTypeForm(): void {
    this.addJobTypeForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addJobType(): void {
    if (this.addJobTypeForm.valid) {

      this.jobType = Object.assign({}, this.addJobTypeForm.value);

    }
    this.jobTypeService.addJobType(this.jobType).subscribe((data) => {

      this.alertifyService.success(data.name + ' İş Türü Eklendi');
      this.router.navigate(['job']);
    });
  }

  ngOnInit(): void {
    this.createAddJobTypeForm();
  }

}

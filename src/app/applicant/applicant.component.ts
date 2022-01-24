import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from '../models/applicant';
import { AlertifyService } from '../services/alertify.service';
import { ApplicantService } from '../services/applicant.service';
import { ColDef } from 'ag-grid-community';
import { Observable, Subject } from 'rxjs';
import { ApplicantList } from '../models/applcant-list';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnDestroy, OnInit {

  constructor(
    private applicantService: ApplicantService,
    private router: Router,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute
  ) { }
    applicants!: Applicant[];
    applicantList!: ApplicantList[];
    jobId!: number;
    dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
   getApplicants(): void {
      this.jobId = this.route.snapshot.params.jobId;
      this.applicantService.getAllApplicantDto().subscribe(data => {
        this.applicantList = data;

        this.dtTrigger.next();
      });
    }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getApplicants();
    console.log(this.applicantList);
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { JobTypeService } from '../services/job-type.service';

@Component({
  selector: 'app-job-types',
  templateUrl: './job-types.component.html',
  styleUrls: ['./job-types.component.scss']
})
export class JobTypesComponent implements OnInit {

  constructor(
    jobTypeService: JobTypeService
  ) { }
  getByIdJobType(id:number){

  }

  ngOnInit(): void {
  }

}

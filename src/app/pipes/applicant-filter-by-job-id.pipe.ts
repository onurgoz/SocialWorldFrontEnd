import { Pipe, PipeTransform } from '@angular/core';
import { ApplicantList } from '../models/applcant-list';

@Pipe({
  name: 'applicantFilterByJobId'
})
export class ApplicantFilterByJobIdPipe implements PipeTransform {

  transform(value: ApplicantList[], jobId: number): any {
    console.log(jobId);
    console.log(value?.filter((applicant) => applicant.jobId === jobId));
    return value?.filter((applicant) => applicant.jobId.toString() == jobId.toString());
  }

}

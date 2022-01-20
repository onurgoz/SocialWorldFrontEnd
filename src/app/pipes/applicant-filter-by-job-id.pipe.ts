import { Pipe, PipeTransform } from '@angular/core';
import { Applicant } from '../models/applicant';

@Pipe({
  name: 'applicantFilterByJobId'
})
export class ApplicantFilterByJobIdPipe implements PipeTransform {

  transform(value: Applicant[], jobId: number): any {
    return value?.filter((applicant) => applicant.jobId.toString() === jobId.toString());
  }

}

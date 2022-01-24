import { Pipe, PipeTransform } from '@angular/core';
import { ApplicantList } from '../models/applcant-list';
import { Applicant } from '../models/applicant';

@Pipe({
  name: 'applicantFilterByJobId'
})
export class ApplicantFilterByJobIdPipe implements PipeTransform {

  transform(value: ApplicantList[], jobId: number): ApplicantList[] {
    return value?.filter((applicant) => applicant.jobId.toString() === jobId.toString());
  }

}

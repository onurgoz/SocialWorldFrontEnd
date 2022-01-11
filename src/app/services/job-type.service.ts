import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobType } from '../models/job-type';

@Injectable({
  providedIn: 'root'
})
export class JobTypeService {

  constructor(private http: HttpClient) { }
  path = 'http://localhost:56183/api/jobtype/';

  httpOptions = {};
  addJobType(jobType: JobType): Observable<any> {
    this.setHttpOptions();
    return this.http.post<any>(
      this.path + 'addjobtype',
      {

        Name: jobType.name

      },
      this.httpOptions
    );
  }
  editJobType(jobType: JobType): Promise<JobType> {
    this.setHttpOptions();
    return this.http
      .put<JobType>(
        this.path +'editJobType',
        {

          Name: jobType.name

        },
        this.httpOptions
      )
      .toPromise();
  }
  async deleteJobType(id: number): Promise<void> {
    this.setHttpOptions();
    const response = await this.http
      .delete<void>(this.path +"DeleteCompany"+ id, this.httpOptions)
      .toPromise();
    return response;
  }

  getByIdJobType(id: number): Observable<JobType> {
    this.setHttpOptions();
    const response = this.http
      .get<JobType>(this.path + "GetByIdJobType/" + id, this.httpOptions);
    return response;
  }

  private setHttpOptions(): void {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
  }
}

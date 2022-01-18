import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private alertifyService: AlertifyService,
    private router: Router
  ) { }
  addCompanyForm!: FormGroup;
  company: Company = new Company();

  createAddCompanyForm(): void {
    this.addCompanyForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      explanation: ['', Validators.required],
      taxNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      photoString: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  addCompany(): void {
    if (this.addCompanyForm.valid) {
      const userId = Number(sessionStorage.getItem('userId'));
      this.company = Object.assign({}, this.addCompanyForm.value);
      this.company.userId = userId;
      this.company.companyTypeId = 3;
    }
    this.companyService.addCompany(this.company).subscribe((data) => {
      this.alertifyService.success(data.name + ' şirketi eklendi');
      this.router.navigate(['company']);
    });
  }

  ngOnInit(): void {
    this.createAddCompanyForm();
  }

}

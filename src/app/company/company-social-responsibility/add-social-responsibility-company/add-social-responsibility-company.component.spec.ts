import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocialResponsibilityCompanyComponent } from './add-social-responsibility-company.component';

describe('AddSocialResponsibilityCompanyComponent', () => {
  let component: AddSocialResponsibilityCompanyComponent;
  let fixture: ComponentFixture<AddSocialResponsibilityCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSocialResponsibilityCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocialResponsibilityCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

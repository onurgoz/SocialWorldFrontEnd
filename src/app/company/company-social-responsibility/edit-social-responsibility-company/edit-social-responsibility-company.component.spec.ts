import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialResponsibilityCompanyComponent } from './edit-social-responsibility-company.component';

describe('EditSocialResponsibilityCompanyComponent', () => {
  let component: EditSocialResponsibilityCompanyComponent;
  let fixture: ComponentFixture<EditSocialResponsibilityCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSocialResponsibilityCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSocialResponsibilityCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

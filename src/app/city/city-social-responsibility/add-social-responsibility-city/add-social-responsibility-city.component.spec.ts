import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocialResponsibilityCityComponent } from './add-social-responsibility-city.component';

describe('AddSocialResponsibilityCityComponent', () => {
  let component: AddSocialResponsibilityCityComponent;
  let fixture: ComponentFixture<AddSocialResponsibilityCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSocialResponsibilityCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocialResponsibilityCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

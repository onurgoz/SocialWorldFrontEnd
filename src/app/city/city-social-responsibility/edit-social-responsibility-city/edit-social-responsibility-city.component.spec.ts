import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialResponsibilityCityComponent } from './edit-social-responsibility-city.component';

describe('EditSocialResponsibilityCityComponent', () => {
  let component: EditSocialResponsibilityCityComponent;
  let fixture: ComponentFixture<EditSocialResponsibilityCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSocialResponsibilityCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSocialResponsibilityCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

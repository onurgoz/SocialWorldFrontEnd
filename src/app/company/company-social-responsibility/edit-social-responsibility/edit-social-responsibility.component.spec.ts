import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialResponsibilityComponent } from './edit-social-responsibility.component';

describe('EditSocialResponsibilityComponent', () => {
  let component: EditSocialResponsibilityComponent;
  let fixture: ComponentFixture<EditSocialResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSocialResponsibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSocialResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

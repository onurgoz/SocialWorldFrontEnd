import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySocialResponsibilityComponent } from './city-social-responsibility.component';

describe('CitySocialResponsibilityComponent', () => {
  let component: CitySocialResponsibilityComponent;
  let fixture: ComponentFixture<CitySocialResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySocialResponsibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySocialResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

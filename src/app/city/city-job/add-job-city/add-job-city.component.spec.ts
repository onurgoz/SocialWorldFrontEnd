import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobCityComponent } from './add-job-city.component';

describe('AddJobCityComponent', () => {
  let component: AddJobCityComponent;
  let fixture: ComponentFixture<AddJobCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

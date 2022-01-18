import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobCityComponent } from './edit-job-city.component';

describe('EditJobCityComponent', () => {
  let component: EditJobCityComponent;
  let fixture: ComponentFixture<EditJobCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityJobComponent } from './city-job.component';

describe('CityJobComponent', () => {
  let component: CityJobComponent;
  let fixture: ComponentFixture<CityJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

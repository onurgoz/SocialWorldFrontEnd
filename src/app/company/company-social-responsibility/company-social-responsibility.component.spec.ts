import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySocialResponsibiltyComponent } from './company-social-responsibilty.component';

describe('CompanySocialResponsibiltyComponent', () => {
  let component: CompanySocialResponsibiltyComponent;
  let fixture: ComponentFixture<CompanySocialResponsibiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySocialResponsibiltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySocialResponsibiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

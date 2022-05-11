import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPatientComponent } from './professional-patient.component';

describe('ProfessionalPatientComponent', () => {
  let component: ProfessionalPatientComponent;
  let fixture: ComponentFixture<ProfessionalPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

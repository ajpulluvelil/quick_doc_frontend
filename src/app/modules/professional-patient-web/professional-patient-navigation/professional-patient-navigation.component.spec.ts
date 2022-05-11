import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPatientNavigationComponent } from './professional-patient-navigation.component';

describe('ProfessionalPatientNavigationComponent', () => {
  let component: ProfessionalPatientNavigationComponent;
  let fixture: ComponentFixture<ProfessionalPatientNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalPatientNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPatientNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

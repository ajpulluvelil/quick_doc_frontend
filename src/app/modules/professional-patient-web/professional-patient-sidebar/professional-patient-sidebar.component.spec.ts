import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPatientSidebarComponent } from './professional-patient-sidebar.component';

describe('ProfessionalPatientSidebarComponent', () => {
  let component: ProfessionalPatientSidebarComponent;
  let fixture: ComponentFixture<ProfessionalPatientSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalPatientSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPatientSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

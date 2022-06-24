import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationQuestionnaireComponent } from './registration-questionnaire.component';

describe('RegistrationQuestionnaireComponent', () => {
  let component: RegistrationQuestionnaireComponent;
  let fixture: ComponentFixture<RegistrationQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

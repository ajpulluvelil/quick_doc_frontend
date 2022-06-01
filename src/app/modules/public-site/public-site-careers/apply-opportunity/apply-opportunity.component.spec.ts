import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyOpportunityComponent } from './apply-opportunity.component';

describe('ApplyOpportunityComponent', () => {
  let component: ApplyOpportunityComponent;
  let fixture: ComponentFixture<ApplyOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

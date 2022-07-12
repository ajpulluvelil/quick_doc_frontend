import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSuccessWindowComponent } from './common-success-window.component';

describe('CommonSuccessWindowComponent', () => {
  let component: CommonSuccessWindowComponent;
  let fixture: ComponentFixture<CommonSuccessWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSuccessWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSuccessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

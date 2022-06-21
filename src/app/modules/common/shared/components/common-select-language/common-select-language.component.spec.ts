import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSelectLanguageComponent } from './common-select-language.component';

describe('CommonSelectLanguageComponent', () => {
  let component: CommonSelectLanguageComponent;
  let fixture: ComponentFixture<CommonSelectLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSelectLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSelectLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

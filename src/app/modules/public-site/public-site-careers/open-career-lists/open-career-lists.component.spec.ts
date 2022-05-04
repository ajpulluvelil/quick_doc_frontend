import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCareerListsComponent } from './open-career-lists.component';

describe('OpenCareerListsComponent', () => {
  let component: OpenCareerListsComponent;
  let fixture: ComponentFixture<OpenCareerListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCareerListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCareerListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

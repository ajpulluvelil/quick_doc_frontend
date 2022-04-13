import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteCareersComponent } from './public-site-careers.component';

describe('PublicSiteCareersComponent', () => {
  let component: PublicSiteCareersComponent;
  let fixture: ComponentFixture<PublicSiteCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteCareersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

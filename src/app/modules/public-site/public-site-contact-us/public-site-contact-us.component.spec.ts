import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteContactUsComponent } from './public-site-contact-us.component';

describe('PublicSiteContactUsComponent', () => {
  let component: PublicSiteContactUsComponent;
  let fixture: ComponentFixture<PublicSiteContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

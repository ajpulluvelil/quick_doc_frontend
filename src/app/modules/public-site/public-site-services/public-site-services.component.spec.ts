import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteServicesComponent } from './public-site-services.component';

describe('PublicSiteServicesComponent', () => {
  let component: PublicSiteServicesComponent;
  let fixture: ComponentFixture<PublicSiteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

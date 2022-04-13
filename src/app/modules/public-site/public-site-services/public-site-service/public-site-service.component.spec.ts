import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteServiceComponent } from './public-site-service.component';

describe('PublicSiteServiceComponent', () => {
  let component: PublicSiteServiceComponent;
  let fixture: ComponentFixture<PublicSiteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

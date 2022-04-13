import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteNavigationComponent } from './public-site-navigation.component';

describe('PublicSiteNavigationComponent', () => {
  let component: PublicSiteNavigationComponent;
  let fixture: ComponentFixture<PublicSiteNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

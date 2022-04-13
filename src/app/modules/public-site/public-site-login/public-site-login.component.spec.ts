import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteLoginComponent } from './public-site-login.component';

describe('PublicSiteLoginComponent', () => {
  let component: PublicSiteLoginComponent;
  let fixture: ComponentFixture<PublicSiteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

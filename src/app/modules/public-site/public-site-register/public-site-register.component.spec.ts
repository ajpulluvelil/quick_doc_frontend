import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteRegisterComponent } from './public-site-register.component';

describe('PublicSiteRegisterComponent', () => {
  let component: PublicSiteRegisterComponent;
  let fixture: ComponentFixture<PublicSiteRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

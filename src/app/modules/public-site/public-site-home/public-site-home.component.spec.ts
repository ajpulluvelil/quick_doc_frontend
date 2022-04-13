import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteHomeComponent } from './public-site-home.component';

describe('PublicSiteHomeComponent', () => {
  let component: PublicSiteHomeComponent;
  let fixture: ComponentFixture<PublicSiteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

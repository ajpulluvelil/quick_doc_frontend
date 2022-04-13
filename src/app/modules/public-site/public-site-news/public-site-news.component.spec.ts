import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteNewsComponent } from './public-site-news.component';

describe('PublicSiteNewsComponent', () => {
  let component: PublicSiteNewsComponent;
  let fixture: ComponentFixture<PublicSiteNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSiteNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

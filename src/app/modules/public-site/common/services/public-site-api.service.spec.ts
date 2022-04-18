import { TestBed } from '@angular/core/testing';

import { PublicSiteApiService } from './public-site-api.service';

describe('PublicSiteApiService', () => {
  let service: PublicSiteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicSiteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

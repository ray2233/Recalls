import { TestBed } from '@angular/core/testing';

import { FdaorangelistcompaniesService } from './fdaorangelistcompanies.service';

describe('FdaorangelistcompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdaorangelistcompaniesService = TestBed.get(FdaorangelistcompaniesService);
    expect(service).toBeTruthy();
  });
});

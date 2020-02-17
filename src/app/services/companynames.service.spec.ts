import { TestBed } from '@angular/core/testing';

import { CompanynamesService } from './companynames.service';

describe('CompanynamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanynamesService = TestBed.get(CompanynamesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CercleserviceService } from './cercleservice.service';

describe('CercleserviceService', () => {
  let service: CercleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CercleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

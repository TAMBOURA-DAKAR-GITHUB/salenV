import { TestBed } from '@angular/core/testing';

import { CommuneserviceService } from './communeservice.service';

describe('CommuneserviceService', () => {
  let service: CommuneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommuneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

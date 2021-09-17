import { TestBed } from '@angular/core/testing';

import { MairieserviceService } from './mairieservice.service';

describe('MairieserviceService', () => {
  let service: MairieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MairieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

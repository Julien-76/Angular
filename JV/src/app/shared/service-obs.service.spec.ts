import { TestBed } from '@angular/core/testing';

import { ServiceObsService } from './service-obs.service';

describe('ServiceObsService', () => {
  let service: ServiceObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SevexoService } from './sevexo.service';

describe('SevexoService', () => {
  let service: SevexoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevexoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

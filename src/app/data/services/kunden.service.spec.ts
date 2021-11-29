import { TestBed } from '@angular/core/testing';

import { KundenService } from './kunden.service';

describe('KundenService', () => {
  let service: KundenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KundenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

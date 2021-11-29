import { TestBed } from '@angular/core/testing';

import { RechnungenService } from './rechnungen.service';

describe('RechnungenService', () => {
  let service: RechnungenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechnungenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

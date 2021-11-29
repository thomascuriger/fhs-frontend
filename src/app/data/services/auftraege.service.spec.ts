import { TestBed } from '@angular/core/testing';

import { AuftraegeService } from './auftraege.service';

describe('AuftraegeService', () => {
  let service: AuftraegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuftraegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

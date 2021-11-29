import { TestBed } from '@angular/core/testing';

import { MitarbeiterDataService } from './mitarbeiter-data.service';

describe('MitarbeiterService', () => {
  let service: MitarbeiterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MitarbeiterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

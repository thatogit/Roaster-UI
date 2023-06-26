import { TestBed } from '@angular/core/testing';

import { RoastersService } from './roasters.service';

describe('RoastersService', () => {
  let service: RoastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

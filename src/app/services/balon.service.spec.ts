import { TestBed } from '@angular/core/testing';

import { BalonService } from './balon.service';

describe('BalonService', () => {
  let service: BalonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

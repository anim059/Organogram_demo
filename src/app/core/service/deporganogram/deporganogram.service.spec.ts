import { TestBed } from '@angular/core/testing';

import { DeporganogramService } from './deporganogram.service';

describe('DeporganogramService', () => {
  let service: DeporganogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeporganogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

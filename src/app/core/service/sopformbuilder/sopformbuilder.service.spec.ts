import { TestBed } from '@angular/core/testing';

import { SopformbuilderService } from './sopformbuilder.service';

describe('SopformbuilderService', () => {
  let service: SopformbuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SopformbuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

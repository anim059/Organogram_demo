import { TestBed } from '@angular/core/testing';

import { UserOrganogramService } from './user-organogram.service';

describe('UserOrganogramService', () => {
  let service: UserOrganogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOrganogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

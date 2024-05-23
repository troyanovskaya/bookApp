import { TestBed } from '@angular/core/testing';

import { NoUserRecService } from './no-user-rec.service';

describe('NoUserRecService', () => {
  let service: NoUserRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoUserRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

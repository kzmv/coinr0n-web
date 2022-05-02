import { TestBed } from '@angular/core/testing';

import { CoinronService } from './coinron.service';

describe('CoinronService', () => {
  let service: CoinronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BabyService } from './baby.service';

describe('BabyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BabyService = TestBed.get(BabyService);
    expect(service).toBeTruthy();
  });
});

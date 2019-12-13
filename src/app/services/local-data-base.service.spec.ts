import { TestBed } from '@angular/core/testing';

import { LocalDataBaseService } from './local-data-base.service';

describe('LocalDataBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalDataBaseService = TestBed.get(LocalDataBaseService);
    expect(service).toBeTruthy();
  });
});

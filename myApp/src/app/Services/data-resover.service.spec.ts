import { TestBed } from '@angular/core/testing';

import { DataResoverService } from './data-resover.service';

describe('DataResoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataResoverService = TestBed.get(DataResoverService);
    expect(service).toBeTruthy();
  });
});

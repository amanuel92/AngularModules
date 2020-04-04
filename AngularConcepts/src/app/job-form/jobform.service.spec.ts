import { TestBed } from '@angular/core/testing';

import { JobformService } from './jobform.service';

describe('JobformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobformService = TestBed.get(JobformService);
    expect(service).toBeTruthy();
  });
});

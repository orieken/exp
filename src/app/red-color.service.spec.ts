import { TestBed } from '@angular/core/testing';

import { RedColorService } from './red-color.service';

describe('RedService', () => {
  let service: RedColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

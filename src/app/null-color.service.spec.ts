import { TestBed } from '@angular/core/testing';

import { NullColorService } from './null-color.service';

describe('NullColorService', () => {
  let service: NullColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NullColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

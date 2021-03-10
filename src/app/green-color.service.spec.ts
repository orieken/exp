import { TestBed } from '@angular/core/testing';

import { GreenColorService } from './green-color.service';

describe('GreenService', () => {
  let service: GreenColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

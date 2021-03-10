import { TestBed } from '@angular/core/testing';

import { BlueColorService } from './blue-color.service';

describe('BlueService', () => {
  let service: BlueColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

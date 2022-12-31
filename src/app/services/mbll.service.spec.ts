import { TestBed } from '@angular/core/testing';

import { MBLLService } from './mbll.service';

describe('MBLLService', () => {
  let service: MBLLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MBLLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

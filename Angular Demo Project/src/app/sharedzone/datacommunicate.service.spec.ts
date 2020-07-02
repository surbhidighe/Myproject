import { TestBed } from '@angular/core/testing';

import { DatacommunicateService } from './datacommunicate.service';

describe('DatacommunicateService', () => {
  let service: DatacommunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacommunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

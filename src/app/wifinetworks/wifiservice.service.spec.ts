import { TestBed } from '@angular/core/testing';

import { WifiserviceService } from './wifiservice.service';

describe('WifiserviceService', () => {
  let service: WifiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WifiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

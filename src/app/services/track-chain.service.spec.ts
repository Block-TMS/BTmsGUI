import { TestBed } from '@angular/core/testing';

import { TrackChainService } from './track-chain.service';

describe('TrackChainService', () => {
  let service: TrackChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackChainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

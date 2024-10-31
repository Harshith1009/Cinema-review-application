import { TestBed } from '@angular/core/testing';

import { ReviewDetailsService } from './review-details.service';

describe('ReviewDetailsService', () => {
  let service: ReviewDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

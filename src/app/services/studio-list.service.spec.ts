import { TestBed } from '@angular/core/testing';

import { StudioListService } from './studio-list.service';

describe('StudioListService', () => {
  let service: StudioListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudioListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

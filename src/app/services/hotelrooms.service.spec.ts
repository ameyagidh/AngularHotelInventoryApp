import { TestBed } from '@angular/core/testing';

import { HotelroomsService } from './hotelrooms.service';

describe('HotelroomsService', () => {
  let service: HotelroomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelroomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

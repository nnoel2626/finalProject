import { TestBed } from '@angular/core/testing';

import { RentalshopService } from './rentalshop.service';

describe('RentalshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentalshopService = TestBed.get(RentalshopService);
    expect(service).toBeTruthy();
  });
});

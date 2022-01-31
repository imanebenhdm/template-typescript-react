import { TestBed } from '@angular/core/testing';

import { SPizzaService } from './s-pizza.service';

describe('SPizzaService', () => {
  let service: SPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

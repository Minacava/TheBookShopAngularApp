import { TestBed, inject } from '@angular/core/testing';

import { AddCartService } from './AddCartService';

describe('AddCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCartService]
    });
  });

  it('should be created', inject([AddCartService], (service: AddCartService) => {
    expect(service).toBeTruthy();
  }));
});

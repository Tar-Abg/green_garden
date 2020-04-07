import { TestBed } from '@angular/core/testing';

import { GetFlowersService } from './get-flowers.service';

describe('GetFlowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFlowersService = TestBed.get(GetFlowersService);
    expect(service).toBeTruthy();
  });
});

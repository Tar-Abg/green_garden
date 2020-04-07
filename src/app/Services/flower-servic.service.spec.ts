import { TestBed } from '@angular/core/testing';

import { FlowerServicService } from './flower-servic.service';

describe('FlowerServicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowerServicService = TestBed.get(FlowerServicService);
    expect(service).toBeTruthy();
  });
});

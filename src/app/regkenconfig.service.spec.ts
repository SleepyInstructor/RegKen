import { TestBed, inject } from '@angular/core/testing';

import { RegkenconfigService } from './regkenconfig.service';

describe('RegkenconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegkenconfigService]
    });
  });

  it('should be created', inject([RegkenconfigService], (service: RegkenconfigService) => {
    expect(service).toBeTruthy();
  }));
});

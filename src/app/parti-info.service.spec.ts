import { TestBed, inject } from '@angular/core/testing';

import { ParticipantInfo } from './parti-info.service';

describe('ParticipateInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantInfo]
    });
  });

  it('should be created', inject([ParticipantInfo], (service: ParticipantInfo) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PersonasServiceService } from './personas-service.service';

describe('PersonasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasServiceService = TestBed.get(PersonasServiceService);
    expect(service).toBeTruthy();
  });
});

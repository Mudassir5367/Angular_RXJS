import { TestBed } from '@angular/core/testing';

import { ContacsService } from './contacts.service';

describe('ContacsService', () => {
  let service: ContacsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

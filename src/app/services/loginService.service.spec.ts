import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './loginService.service';

describe('LoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServiceService = TestBed.get(LoginServiceService);
    expect(service).toBeTruthy();
  });
});

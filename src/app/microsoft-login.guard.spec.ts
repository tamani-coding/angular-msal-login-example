import { TestBed } from '@angular/core/testing';

import { MicrosoftLoginGuard } from './microsoft-login.guard';

describe('MicrosoftLoginGuard', () => {
  let guard: MicrosoftLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MicrosoftLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

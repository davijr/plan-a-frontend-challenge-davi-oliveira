import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AuthGuard } from './auth-guard';

describe('AuthGuardService', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        StoreModule.forRoot([])
      ]
    }).compileComponents();
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

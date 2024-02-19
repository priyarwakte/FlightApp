import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    authServiceMock = {
      getAuthState: jasmine.createSpy('getAuthState').and.returnValue(of(true)) 
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow the authenticated user to access app', (done: DoneFn) => {
    const routeMock: ActivatedRouteSnapshot = {} as any;
    const routeStateMock: RouterStateSnapshot = {url: '/test'} as any;

    authGuard.canActivate(routeMock, routeStateMock).subscribe(isAllowed => {
      expect(isAllowed).toBeTrue();
      done();
    });
  });


});

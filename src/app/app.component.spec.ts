import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let router: Router;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([]),
        AppRoutingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should go to login page when logout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigate');
    app.logout();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });

});

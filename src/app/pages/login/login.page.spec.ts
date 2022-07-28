import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppState } from 'src/store/AppState';
import { loadingReducer } from 'src/store/loading/loading.reducer';
import { loginReducer } from 'src/store/login/login.reducer';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  let http: HttpClient;
  let store: Store<AppState>;
  let page: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          loading: loadingReducer,
          login: loginReducer
        }),
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    http = TestBed.get(HttpClient);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = fixture.debugElement.nativeElement;
  }));

  it('should create form on init', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should show loading and start login when loggin in', () => {
    fixture.detectChanges();
    component.form.get('username').setValue('anyUsername');
    component.form.get('password').setValue('anyPassword');
    page.querySelector('#loginButton').click();
    store.select('loading').subscribe(loadingState => {
      expect(loadingState.show).toBeTruthy();
    });
    store.select('login').subscribe(loginState => {
      expect(loginState.isLoggingIn).toBeTruthy();
    });
  });

  // it('should go to home page on login', fakeAsync(() => {
  //   spyOn(router, 'navigate');
  //   component.login();
  //   tick(1500);
  //   expect(router.navigate).toHaveBeenCalledWith(['home']);
  // }));
});

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { User } from 'src/model/User';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';
import { login, loginFail, loginSuccess } from 'src/store/login/login.actions';
import { LoginState } from 'src/store/login/LoginState';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  loginStateSubscription: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    this.loginStateSubscription = this.store.select('login').subscribe(loginState => {
      this.onIsLogginIn(loginState);
      this.onIsLoggedIn(loginState);
      this.toogleLoading(loginState);
    });
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    if (this.loginStateSubscription) {
      this.loginStateSubscription.unsubscribe();
    }
  }

  login() {
    this.store.dispatch(login());
  }

  private toogleLoading(loginState: LoginState) {
    if (loginState.isLoggingIn) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }

  private onIsLoggedIn(loginState: LoginState) {
    if (loginState.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  private onIsLogginIn(loginState: LoginState) {
    if (loginState.isLoggingIn) {
      this.store.dispatch(show());
      this.authService.login(
        this.form.get('username').value,
        this.form.get('password').value
      ).subscribe(
        user => {
          this.store.dispatch(loginSuccess({user: (user as User)}));
          this.toast.success('Logged successfully.');
          this.router.navigate(['home']);
        },
        error => {
          this.store.dispatch(loginFail(error));
          this.toast.error('A logging error ocurred. ' + error.status);
          console.error(error);
        }
      );
    }
  }
}

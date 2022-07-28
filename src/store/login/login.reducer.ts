/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
import { createReducer, on } from '@ngrx/store';
import { appInitialState } from '../appInitialState';
import { login, loginFail, loginSuccess } from './login.actions';
import { LoginState } from './LoginState';

const initialState: LoginState = appInitialState.login;

const reducer = createReducer(
    initialState,
    on(login, currentState => {
        return {
            ...currentState,
            error: null,
            isLoggedIn: false,
            isLoggingIn: true
        }
    }),
    on(loginSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            isLoggedIn: true,
            isLoggingIn: false
        }
    }),
    on(loginFail, (currentState, action) => {
        return {
            ...currentState,
            error: action?.error,
            isLoggedIn: false,
            isLoggingIn: false
        }
    })
)

export function loginReducer(state: LoginState, action) {
    return reducer(state, action);
}

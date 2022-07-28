import { User } from 'src/model/User';

export interface LoginState {
    error: any;
    isLoggedIn: boolean;
    isLoggingIn: boolean;
    user: User;
}

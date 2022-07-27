import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('LoginPageForm', () => {

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    });

    it('should create login form empty', () => {
        expect(form).not.toBeNull();
        expect(form.get('username')).not.toBeNull();
        expect(form.get('username').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').valid).toBeFalsy();
    });

    it('should have username invalid if email is not valid', () => {
        form.get('username').setValue('invalid email');

        expect(form.get('username').valid).toBeFalsy();
    });

    it('should have username valid if email is valid', () => {
        form.get('username').setValue('valid@email.com');

        expect(form.get('username').valid).toBeTruthy();
    });

    it('should have a valid form', () => {
        form.get('username').setValue('valid@email.com');
        form.get('password').setValue('password');

        expect(form.valid).toBeTruthy();
    });

});

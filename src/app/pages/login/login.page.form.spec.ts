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

    it('should have a valid form', () => {
        form.get('username').setValue('anyUsername');
        form.get('password').setValue('anyPassword');

        expect(form.valid).toBeTruthy();
    });

});

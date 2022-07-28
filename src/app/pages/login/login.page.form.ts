import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPageForm {

    constructor(
        private formBuilder: FormBuilder
    ) {}

    createForm(): FormGroup {
        return this.formBuilder.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

}

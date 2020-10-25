import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  NameValidation,
  passwordConfirm,
  PassWordValidation,
} from 'src/app/shared/Validators/signUpvalidation.validator';

@Component({
  selector: 'app-sign-up-comp',
  templateUrl: './sign-up-comp.component.html',
  styleUrls: ['./sign-up-comp.component.css'],
})
export class SignUpCompComponent implements OnInit {
  SignUpForm: FormGroup;
  submitted: boolean = false;
  constructor(
    public fb: FormBuilder,
    public Route: Router,
    private toast: ToastrService
  ) {
    this.CreatForm();
  }
  ngOnInit(): void {}
  CreatForm() {
    this.SignUpForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            NameValidation(/[0-9]/gi),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            NameValidation(/[0-9]/gi),
          ],
        ],
        email: [
          '',
          [Validators.required, Validators.email, Validators.pattern('.*com$')],
        ],
        country: '',
        checkBox: [false, Validators.requiredTrue],
        password: ['', [Validators.required, PassWordValidation()]],
        ConfirmPassword: ['', Validators.required],
      },
      { validator: passwordConfirm('password', 'ConfirmPassword') }
    );
  }
  onSubmit() {
    if (this.SignUpForm.invalid) {
      this.toast.error('You Have an ', 'Error');
      return null;
    } else {
      this.toast.success('Successful signup ', 'Done');
      this.submitted = true;
      alert(
        'SUCCESS!! :-)\n\n' + JSON.stringify(this.SignUpForm.value, null, 4)
      );
      this.Route.navigateByUrl('/');
    }
  }

  // Get All Controls
  get firstName() {
    return this.SignUpForm.get('firstName');
  }
  get lastName() {
    return this.SignUpForm.get('lastName');
  }
  get email() {
    return this.SignUpForm.get('email');
  }
  get country() {
    return this.SignUpForm.get('country');
  }
  get checkBox() {
    return this.SignUpForm.get('checkBox');
  }
  get password() {
    return this.SignUpForm.get('password');
  }
  get ConfirmPassword() {
    return this.SignUpForm.get('ConfirmPassword');
  }
}

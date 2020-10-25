import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassWordValidation } from 'src/app/shared/Validators/signUpvalidation.validator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  LoginForm: FormGroup;
  submitted: boolean = false;
  constructor(public fb: FormBuilder, public Route: Router,private toast:ToastrService) {
    this.CreateLoginForm();
  }

  ngOnInit(): void {}
  CreateLoginForm() {
    this.LoginForm = this.fb.group({
      Email: [
        '',
        [Validators.required, Validators.email, Validators.pattern('.*com$')],
      ],
      Password: ['', [Validators.required, PassWordValidation()]],
    });
  }
  onSubmit() {
    if (this.LoginForm.invalid) {
      this.toast.error('You are not authorized', 'Error');
      return null;
      
    } else {
      this.submitted = true;
      this.toast.success('Loggin Successfully', 'Done');
      this.Route.navigateByUrl('/');
    }
  }

  //get Form Controls
  get Email() {
    return this.LoginForm.get('Email');
  }
  get Password() {
    return this.LoginForm.get('Password');
  }
}

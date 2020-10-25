import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function NameValidation(name: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.match(name)) {
      return { NameContaineNumber: true };
    }
  };
}

export function passwordConfirm(
  password: string,
  confirmPassword: string
): ValidatorFn {
  return (group: FormGroup): ValidationErrors | null => {
    let passwordval = group.controls[password];
    let confirmpasswordval = group.controls[confirmPassword];
    if (!passwordval || !confirmpasswordval) return null;
    if (confirmpasswordval.value !== passwordval.value) {
      confirmpasswordval.setErrors({ notSamePassword: true });
    } else {
      confirmpasswordval.setErrors(null);
    }
  };
}

export function PassWordValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const reqularExp = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'
    );
    const valid = reqularExp.test(control.value);
    return valid ? null : { invalidPattern: true };
  };
}

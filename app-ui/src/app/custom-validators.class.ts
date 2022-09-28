import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static hexColorValidator(control: AbstractControl): ValidationErrors | null {
    const regex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
    if (!regex.test(control.value)) {
      return { color: true };
    } else {
      return null;
    }
  }
}

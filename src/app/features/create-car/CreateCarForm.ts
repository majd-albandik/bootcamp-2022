import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateCarForm } from './createCarForm.interface';

function validateOrigin(control: AbstractControl): {
  [s: string]: boolean;
} {
  const origins: string[] = ['GERMANY', 'USA', 'JAPAN'];
  if (!origins.includes((control.value as string).toUpperCase())) return { notCorrectOrigin: true };
  return {};
}
function validateDate(control: AbstractControl): {
  [s: string]: boolean;
} {
  let pattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
  if (!control.value.match(pattern)) return { invalidFormat: true };
  return {};
}

export class CreateCarForm extends FormGroup<ICreateCarForm> {
  constructor() {
    super({
      model: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      firstRegistration: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required /* run out of time to implement this */,
          /*           validateDate
           */
          //  Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))/[0-9]{4}'),
          /* Validators.pattern('^([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)d{4}$'), */
        ],
      }),
      originField: new FormControl('', { nonNullable: true, validators: [Validators.required, validateOrigin] }),
    });
  }
}

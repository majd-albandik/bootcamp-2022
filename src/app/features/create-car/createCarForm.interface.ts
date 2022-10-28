import { FormControl } from '@angular/forms';

export interface ICreateCarForm {
  model: FormControl<string>;
  firstRegistration: FormControl<string>;
  originField: FormControl<string>;
}

import { FormControl, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

export function repeatValidator(otherControl: FormControl): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (otherControl.value === control.value) {
      return {'repeat': {equal: true}};
    }
    return {'repeat': {equal: false}};
  };
}

@Component({
  selector: 'rpt-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent extends AbstractFormControlComponent<string> implements OnInit {

  /**
   * Set to true if password has to be repeated.
   */
  @Input() repeat: boolean = false;

  @Input() minLength: number = 8;

  /**
   * TODO add pattern validation
   */
  // @Input() pattern: string;

  repeatValue: string = '';

  constructor() {
    super();
  }

  ngOnInit() {
    // Construct validator list
    const validators: ValidatorFn[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.minLength) {
      validators.push(Validators.minLength(6));
    }

    const passwordControl = new FormControl(this.value, validators);

    this.addControl(passwordControl);
    this.createValueChangeEmitter();

    // Add repeat field if needed
    if (this.repeat) {
      const repeatValidators: ValidatorFn[] = [];
      if (this.required) {
        repeatValidators.push(Validators.required);
      }
      repeatValidators.push(repeatValidator(passwordControl));

      const repeatControl = new FormControl(null, repeatValidators);
      passwordControl.valueChanges.subscribe(() => {
        repeatControl.updateValueAndValidity();
      });
      this.addNamedControl(this.repeatFieldName, repeatControl);
    }
  }

  get repeatField() {
    return this.form.get(this.repeatFieldName);
  }

  get repeatFieldName() {
    return this.fieldName + 'Repeat';
  }

}

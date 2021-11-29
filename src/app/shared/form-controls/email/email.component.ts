import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'rpt-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent extends AbstractFormControlComponent<string> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    validators.push(Validators.pattern(EMAIL_REGEX));

    this.addControl(new FormControl(this.value, validators));
    this.createValueChangeEmitter();
  }

}

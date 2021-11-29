import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

const URL_REGEX = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

@Component({
  selector: 'rpt-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss'],
})
export class UrlComponent extends AbstractFormControlComponent<string> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    validators.push(Validators.pattern(URL_REGEX));

    this.addControl(new FormControl(this.value, validators));
    this.createValueChangeEmitter();
  }

  get urlCtrl(): FormControl {
    return this.form.controls[this.fieldName] as FormControl;
  }

}

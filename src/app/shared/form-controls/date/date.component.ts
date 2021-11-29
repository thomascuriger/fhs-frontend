import { ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

@Component({
  selector: 'rpt-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends AbstractFormControlComponent<Date> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }

    this.addControl(new FormControl(this.value, validators));
    this.createValueChangeEmitter();
  }

}

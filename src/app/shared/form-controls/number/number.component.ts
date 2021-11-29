import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

const INTEGER_REGEX = /^[0-9]+$/;
const NUMBER_REGEX = /^[0-9.]+$/;

@Component({
  selector: 'rpt-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent
  extends AbstractFormControlComponent<number>
  implements OnInit
{
  @Input() integer: boolean = false;

  ngOnInit() {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.integer) {
      validators.push(Validators.pattern(INTEGER_REGEX));
    } else {
      validators.push(Validators.pattern(NUMBER_REGEX));
    }

    this.addControl(new FormControl(this.value, validators));
    this.createValueChangeEmitter();
  }
}

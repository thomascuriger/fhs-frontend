import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

@Component({
  selector: 'rpt-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends AbstractFormControlComponent<string> implements OnInit {

  /**
   * Specifies the number of rows the textarea should have.
   */
  @Input() rows: number = 4
  @Input() readonly = false;

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

import { ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

@Component({
  selector: 'rpt-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent extends AbstractFormControlComponent<string> implements OnInit, OnDestroy {

  @Input() maxLength: number = 0;
  @Input() readonly: boolean = false;

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

  ngOnDestroy() {
    this.removeControl();
  }

}

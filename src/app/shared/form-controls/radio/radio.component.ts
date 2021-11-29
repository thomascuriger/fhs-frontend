import { Option } from '@app/data/models';
import { ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

@Component({
  selector: 'fixcontrol-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent extends AbstractFormControlComponent<any> implements OnInit, OnDestroy {

  /**
   * Options that are displayed. An option has a label and a value.
   */
  @Input() options?: Option[];

  constructor() {
    super();
  }

  ngOnInit() {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }

    // Add username control to form
    this.addControl(new FormControl(this.value, validators));
    // Create change emitter
    this.createValueChangeEmitter();
  }

  ngOnDestroy() {
    this.removeControl();
  }

}

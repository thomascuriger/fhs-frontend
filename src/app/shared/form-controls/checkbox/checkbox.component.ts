import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractFormControlComponent } from '../abstract-form-control.component';

@Component({
  selector: 'rpt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends AbstractFormControlComponent<boolean> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.required) {
      if (this.disabled) {
        this.addControl(new FormControl({value: this.value, disabled: true}, [ Validators.required ]))
      } else {
        this.addControl(new FormControl(this.value, [ Validators.required ]));
      }
    } else {
      if (this.disabled) {
        this.addControl(new FormControl({value: this.value, disabled: true}, []))
      } else {
        this.addControl(new FormControl(this.value, []));
      }
    }

    this.createValueChangeEmitter();
  }
}

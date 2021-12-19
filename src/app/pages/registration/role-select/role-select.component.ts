import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { AbstractFormControlComponent } from '@shared/form-controls/abstract-form-control.component';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss']
})
export class RoleSelectComponent
  extends AbstractFormControlComponent<string>
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }

    // Add username control to form
    this.addControl(new FormControl(this.value, validators));
    // Create change emitter
    this.createValueChangeEmitter();
  }
}

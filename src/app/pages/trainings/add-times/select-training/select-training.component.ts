import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractFormControlComponent } from '@shared/form-controls/abstract-form-control.component';
import { Trainingsession } from '@app/data/models';

@Component({
  selector: 'app-select-training',
  templateUrl: './select-training.component.html',
  styleUrls: ['./select-training.component.scss']
})
export class SelectTrainingComponent
  extends AbstractFormControlComponent<string>
  implements OnInit
{
  constructor() {
    super();
  }

  @Input() trainingSessions: Trainingsession[] = [];

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

  ngOnDestroy() {
    this.removeControl();
  }
}

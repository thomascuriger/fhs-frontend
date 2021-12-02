import { SelectTrainingComponent } from './select-training/select-training.component';
import { AddTimesComponent } from './add-times.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AddTimesComponent,
    SelectTrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddTimesComponent
  ]
})
export class AddTimesModule { }

import { TrainingsRoutingModule } from './trainings-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import { AddTimesComponent } from './add-times/add-times.component';
import { EditTimesComponent } from './edit-times/edit-times.component';


@NgModule({
  declarations: [
    TrainingsComponent,
    AddTimesComponent,
    EditTimesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrainingsRoutingModule
  ]
})
export class TrainingsModule { }

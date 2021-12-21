import { TrainingCardComponent } from './training-card/training-card.component';
import { AddTimesModule } from './add-times/add-times.module';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import { EditTimesComponent } from './edit-times/edit-times.component';

@NgModule({
  declarations: [TrainingsComponent, EditTimesComponent, TrainingCardComponent],
  imports: [CommonModule, SharedModule, AddTimesModule, TrainingsRoutingModule]
})
export class TrainingsModule {}

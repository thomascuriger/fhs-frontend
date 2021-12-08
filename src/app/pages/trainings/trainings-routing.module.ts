import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTimesComponent } from './add-times/add-times.component';
import { EditTimesComponent } from './edit-times/edit-times.component';
import { TrainingsComponent } from './trainings.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddTimesComponent
  },
  {
    path: 'edit/:id',
    component: EditTimesComponent
  },
  {
    path: '',
    component: TrainingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule {}

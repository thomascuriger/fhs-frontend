
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainingComponent } from './add-training/add-training.component';
import { AdministrationComponent } from './administration.component';
import { EditTrainingComponent } from './edit-training/edit-training.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddTrainingComponent
  },
  {
    path: 'edit/:id',
    component: EditTrainingComponent
  },
  {
    path: '',
    component: AdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}

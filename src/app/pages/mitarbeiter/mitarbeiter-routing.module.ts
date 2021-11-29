import { EditMitarbeiterComponent } from './edit-mitarbeiter/edit-mitarbeiter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMitarbeiterComponent } from './add-mitarbeiter/add-mitarbeiter.component';
import { MitarbeiterComponent } from './mitarbeiter.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddMitarbeiterComponent
  },
  {
    path: 'edit/:id',
    component: EditMitarbeiterComponent
  },
  {
    path: '',
    component: MitarbeiterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MitarbeiterRoutingModule {}

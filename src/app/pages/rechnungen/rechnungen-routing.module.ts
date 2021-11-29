import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRechnungComponent } from './add-rechnung/add-rechnung.component';
import { EditRechnungComponent } from './edit-rechnung/edit-rechnung.component';
import { RechnungenComponent } from './rechnungen.component';

const routes: Routes = [
  { path: 'add', component: AddRechnungComponent },
  { path: 'edit/:id', component: EditRechnungComponent },
  {
    path: '',
    component: RechnungenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechnungenRoutingModule {}

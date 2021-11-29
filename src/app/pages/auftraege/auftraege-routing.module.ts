import { AuftraegeComponent } from './auftraege.component';
import { AddAuftragComponent } from './add-auftrag/add-auftrag.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    component: AddAuftragComponent
  },
  {
    path: '',
    component: AuftraegeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuftraegeRoutingModule {}

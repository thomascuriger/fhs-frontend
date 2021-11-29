import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KundenDetailsComponent } from './kunden-details/kunden-details.component';
import { AddKundeComponent } from './add-kunde/add-kunde.component';
import { KundenComponent } from './kunden.component';

const routes: Routes = [
  {
    path: 'add:id',
    component: AddKundeComponent
  },
  {
    path: 'details/:id',
    component: KundenDetailsComponent
  },
  {
    path: '',
    component: KundenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KundenRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'bills',
    loadChildren: () =>
      import('./pages/rechnungen/rechnungen.module').then(m => m.RechnungenModule)
  },
  {
    path: 'mandates',
    loadChildren: () =>
      import('./pages/auftraege/auftraege.module').then(m => m.AuftraegeModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/kunden/kunden.module').then(m => m.KundenModule)
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./pages/mitarbeiter/mitarbeiter.module').then(m => m.MitarbeiterModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

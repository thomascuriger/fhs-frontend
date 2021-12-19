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
    path: 'signup',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./pages/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'performances',
    loadChildren: () => import('./pages/performances/performances.module').then(m => m.PerformancesModule)
  },
  {
    path: 'trainings',
    loadChildren: () =>
      import('./pages/trainings/trainings.module').then(m => m.TrainingsModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

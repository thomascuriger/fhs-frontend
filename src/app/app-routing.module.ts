import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddTimesComponent } from './pages/training/add-times/add-times.component';
import { CreateTrainingComponent } from './pages/training/create-training/create-training.component';
import { TrainingComponent } from './pages/training/training.component';
import { ViewTimesComponent } from './pages/training/view-times/view-times.component';
import { ViewTrainingComponent } from './pages/training/view-training/view-training.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'training',
    children: [
      {
        path: ':id',
        component: TrainingComponent
      },
      {
        path: 'view/:id',
        component: ViewTrainingComponent
      },
      {
        path: 'create',
        component: CreateTrainingComponent
      },
      {
        path: 'addtimes/:id',
        component: AddTimesComponent
      },
      {
        path: 'viewtimes/:id',
        component: ViewTimesComponent
      }
      
    ]
  },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

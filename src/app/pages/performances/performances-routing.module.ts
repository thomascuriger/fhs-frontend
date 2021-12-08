import { PerformanceComponent } from './performance/performance.component';
import { PerformancesComponent } from './performances.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {
    path: 'ranking/:id',
    component: RankingComponent
  },
  {
    path: 'performance/:id',
    component: PerformanceComponent
  },
  {
    path: '',
    component: PerformancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformancesRoutingModule {}

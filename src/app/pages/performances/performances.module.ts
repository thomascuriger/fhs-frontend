import { PerformanceComponent } from './performance/performance.component';
import { RankingModule } from './ranking/ranking.module';
import { PerformancesComponent } from './performances.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformancesRoutingModule } from './performances-routing.module';

@NgModule({
  declarations: [PerformancesComponent, PerformanceComponent],
  imports: [CommonModule, SharedModule, PerformancesRoutingModule, RankingModule]
})
export class PerformancesModule {}

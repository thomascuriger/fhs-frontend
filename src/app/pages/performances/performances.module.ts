import { PerformancesComponent } from './performances.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking/ranking.component';
import { PerformancesRoutingModule } from './performances-routing.module';


@NgModule({
  declarations: [
    PerformancesComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerformancesRoutingModule
  ]
})
export class PerformancesModule { }

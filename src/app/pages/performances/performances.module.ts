import { PerformancesComponent } from './performances.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PerformancesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PerformancesModule { }

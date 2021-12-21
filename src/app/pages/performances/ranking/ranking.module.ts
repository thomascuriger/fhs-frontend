import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingCardComponent } from './ranking-card/ranking-card.component';
import { RankingComponent } from './ranking.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [RankingCardComponent, RankingComponent],
  imports: [CommonModule, SharedModule],
  exports: [RankingComponent]
})
export class RankingModule {}

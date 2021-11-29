import { AuftraegeRoutingModule } from './auftraege-routing.module';
import { AddAuftragComponent } from './add-auftrag/add-auftrag.component';
import { AuftraegeComponent } from './auftraege.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AuftraegeComponent,
    AddAuftragComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuftraegeRoutingModule
  ]
})
export class AuftraegeModule { }

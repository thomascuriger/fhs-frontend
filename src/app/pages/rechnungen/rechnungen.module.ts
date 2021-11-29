import { RechnungenRoutingModule } from './rechnungen-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { AddRechnungComponent } from './add-rechnung/add-rechnung.component';
import { EditRechnungComponent } from './edit-rechnung/edit-rechnung.component';
import { RechnungenComponent } from './rechnungen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RechnungenComponent,
    EditRechnungComponent,
    AddRechnungComponent
  ],
  imports: [
    CommonModule,
    RechnungenRoutingModule,
    SharedModule
  ]
})
export class RechnungenModule { }

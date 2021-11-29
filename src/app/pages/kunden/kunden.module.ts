import { KundenRoutingModule } from './kunden-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddKundeComponent } from './add-kunde/add-kunde.component';
import { KundenDetailsComponent } from './kunden-details/kunden-details.component';
import { KundenComponent } from './kunden.component';


@NgModule({
  declarations: [
    KundenComponent,
    KundenDetailsComponent,
    AddKundeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    KundenRoutingModule
  ]
})
export class KundenModule { }

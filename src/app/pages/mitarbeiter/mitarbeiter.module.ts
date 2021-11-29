import { EditMitarbeiterComponent } from './edit-mitarbeiter/edit-mitarbeiter.component';
import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';
import { AddMitarbeiterComponent } from './add-mitarbeiter/add-mitarbeiter.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MitarbeiterComponent } from './mitarbeiter.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MitarbeiterComponent,
    AddMitarbeiterComponent,
    EditMitarbeiterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MitarbeiterRoutingModule
  ]
})
export class MitarbeiterModule { }

import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AddTrainingComponent } from './add-training/add-training.component';
import { EditTrainingComponent } from './edit-training/edit-training.component';
import { CategorySelectComponent } from './category-select/category-select.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    AddTrainingComponent,
    EditTrainingComponent,
    CategorySelectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }

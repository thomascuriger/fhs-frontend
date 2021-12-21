import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RoleSelectComponent } from './role-select/role-select.component';

@NgModule({
  declarations: [RegistrationComponent, RoleSelectComponent],
  imports: [CommonModule, SharedModule, RegistrationRoutingModule]
})
export class RegistrationModule {}

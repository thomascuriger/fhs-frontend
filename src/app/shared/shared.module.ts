import { FormControlsModule } from './form-controls/form-controls.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [CommonModule],
  exports: [TranslateModule, MaterialModule, FormControlsModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class SharedModule {}

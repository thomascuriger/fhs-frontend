import { FormControlsModule } from './form-controls/form-controls.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  exports: [TranslateModule, MaterialModule, FormControlsModule, ReactiveFormsModule]
})
export class SharedModule {}

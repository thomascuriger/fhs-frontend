import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { EmailComponent } from './email/email.component';
import { NumberComponent } from './number/number.component';
import { PasswordComponent } from './password/password.component';
import { TextComponent } from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { UrlComponent } from './url/url.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CheckboxComponent,
    DateComponent,
    EmailComponent,
    NumberComponent,
    PasswordComponent,
    TextComponent,
    TextareaComponent,
    UrlComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, TranslateModule],
  exports: [
    CheckboxComponent,
    DateComponent,
    EmailComponent,
    NumberComponent,
    PasswordComponent,
    TextComponent,
    TextareaComponent,
    UrlComponent
  ]
})
export class FormControlsModule {}

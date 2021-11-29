import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';

@NgModule({
  declarations: [DeleteConfirmationDialogComponent],
  imports: [CommonModule, SharedModule]
})
export class DialogsModule {}

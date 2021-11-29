import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) {}

  confirm() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }
}

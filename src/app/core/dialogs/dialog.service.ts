import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDeleteConfirmationDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open<DeleteConfirmationDialogComponent, void, boolean>(
      DeleteConfirmationDialogComponent,
      {
        role: 'dialog',
        autoFocus: false,
        width: '30rem',
        height: 'min-content'
      }
    );
    return dialogRef.beforeClosed().pipe(map(res => !!res));
  }
}

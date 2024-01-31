import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
})
export class UserDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userName: string }
  ) {}

  confirmDelete(): void {
    // Puedes agregar lógica adicional aquí antes de cerrar el diálogo
    this.dialogRef.close(true);
  }

}

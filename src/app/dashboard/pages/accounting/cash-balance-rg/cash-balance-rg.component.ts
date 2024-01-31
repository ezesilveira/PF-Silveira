import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-cash-balance-rg',
  templateUrl: './cash-balance-rg.component.html',
  styleUrls: ['./cash-balance-rg.component.scss'],
})

export class CashBalanceRgComponent {
  displayedColumns: string[] = ['Cod. Op', 'Operadora', 'Operación', 'Importe', 'Cliente', 'Tipo Pago', 'Nota'];
  
  cashBalanceForm : FormGroup;

  constructor(private fb : FormBuilder, 
              /* private matDialogRef: MatDialogRef <UsersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user?: User */
              ){
    this.cashBalanceForm = this.fb.group({
      cod_operacion: ['', Validators.required],
      fecha: ['', Validators.required],
      operadora: ['', [Validators.required]],
      operacion: ['', [Validators.required]],
      importe: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      tipo_pago: ['', [Validators.required]],
      nota: ['', [Validators.required]],
      comprobante: ['', [Validators.required]],
    });

    /* if(this.user) {
      this.cashBalanceForm.patchValue(this.user);
    } */
  }

  /* onSubmit() : void {
    if (this.cashBalanceForm.invalid) {
      this.cashBalanceForm.markAllAsTouched(); 
    } else {
      this.matDialogRef.close(this.cashBalanceForm.value);
    }
  } */
}

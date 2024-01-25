import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from './models';
import { MatDialog } from '@angular/material/dialog';
import { FinancialService } from '../financial.service';
/* import { NotifierService } from '../core/services/notifier.service'; */

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
  userName = '';
  invoices$: Observable<Invoice[]>;
  
    constructor(
      private matDialog : MatDialog,
      private FinancialService : FinancialService,
      /* private NotifierService : NotifierService */
    ){
      this.invoices$ = this.FinancialService.getInvoices();
      /* this.UsersService.loadUsers(); */
      /* this.NotifierService.showSuccess('Exito', 'Se Cargaron los usuarios') */
    }
/*     addUser (): void {
      this.matDialog.open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (valorFormulario) => {
          if (!!valorFormulario) {
            this.invoices$ = this.UsersService.createUser(valorFormulario);
          }
        },
      });
    }
  
    OnEditUser(invoice: Invoice): void {
      this.matDialog.open(UsersDialogComponent, {
        data: invoice,
      }).afterClosed().subscribe({
        next: (valorFormulario) => {
          if (!!valorFormulario) {
            this.invoices$ = this.UsersService.updateUser(invoice.id, valorFormulario)
          }
        }
      });
    }
  
    onDeleteUser(invoiceId: number): void {
      if (confirm('Esta seguro de borrar este usuario')) {
        this.invoices$ = this.UsersService.deleteUser(invoiceId);
    }  
  } */
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices/invoices.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FinancialRoutingModule } from './financial-routing.module';
import { InvoicesTableComponent } from './invoices/components/invoices-table/invoices-table.component';
import { InvoicesDialogComponent } from './invoices/components/invoices-dialog/invoices-dialog.component';



@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesTableComponent,
    InvoicesDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }

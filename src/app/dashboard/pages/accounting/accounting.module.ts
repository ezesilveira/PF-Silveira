import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingRoutingModule } from './accounting-routing.module';
import { CashRgComponent } from './cash-rg/cash-rg.component';
import { CashBalanceRgComponent } from './cash-balance-rg/cash-balance-rg.component';
import { CashTlComponent } from './cash-tl/cash-tl.component';
import { CashBalanceTlComponent } from './cash-balance-tl/cash-balance-tl.component';
import { CashUsComponent } from './cash-us/cash-us.component';
import { CashBalanceUsComponent } from './cash-balance-us/cash-balance-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CashTableComponent } from './cash-table/cash-table.component';
import { CashDialogComponent } from './cash-dialog/cash-dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CashRgComponent,
    CashBalanceRgComponent,
    CashTlComponent,
    CashBalanceTlComponent,
    CashUsComponent,
    CashBalanceUsComponent,
    CashTableComponent,
    CashDialogComponent,
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    SharedModule,
    MatGridListModule
  ]
})
export class AccountingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashRgComponent } from './cash-rg/cash-rg.component';
import { CashUsComponent } from './cash-us/cash-us.component';
import { CashTlComponent } from './cash-tl/cash-tl.component';
import { CashBalanceRgComponent } from './cash-balance-rg/cash-balance-rg.component';
import { CashBalanceTlComponent } from './cash-balance-tl/cash-balance-tl.component';
import { CashBalanceUsComponent } from './cash-balance-us/cash-balance-us.component';

@NgModule({
  imports: [
      RouterModule.forChild([
          {
          path: 'cash_rg',
          component: CashRgComponent
          },
          {
          path: 'cash_tl',
          component: CashTlComponent
          },
          {
          path: 'cash_us',
          component: CashUsComponent
          },
          {
          path: 'cash-balance_rg',
          component: CashBalanceRgComponent
          },
          {
          path: 'cash-balance_tl',
          component: CashBalanceTlComponent
          },
          {
          path: 'cash-balance_us',
          component: CashBalanceUsComponent
          },
          /* {
          path: 'detail/:id',
          component: UserDetailComponent,
          }, */
      ])
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AccountingRoutingModule { }

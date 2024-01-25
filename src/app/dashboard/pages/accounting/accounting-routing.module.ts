import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashRgComponent } from './cash-rg/cash-rg.component';

@NgModule({
  imports: [
      RouterModule.forChild([
          {
          path: 'cash_rg',
          component: CashRgComponent
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

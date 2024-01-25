import { Component } from '@angular/core';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-cash-rg',
  templateUrl: './cash-rg.component.html',
  styleUrls: ['./cash-rg.component.scss']
})
export class CashRgComponent {
  constructor(private accountingService: AccountingService) {}

  cashMoves$ = this.accountingService.cashMoves$;

  callAddCashMove(): void {
    /* this.accountingService.addCashMove(); */
  }
}

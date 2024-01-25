import { Injectable } from '@angular/core';
import { CashDialogComponent } from './cash-dialog/cash-dialog.component';
import { Observable, concatMap } from 'rxjs';
import { CashMove } from './models';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  userName = '';
  cashMoves$: Observable<CashMove[]>;

  constructor(private httpClient: HttpClient,
              ) { 
    this.cashMoves$ = this.getCashMoves();
  }

/*   addCashMove (): void {
    this.matDialog.open(CashDialogComponent)
    .afterClosed()
    .subscribe({
      next: (valorFormulario) => {
        if (!!valorFormulario) {
          this.cashMoves$ = this.createCashMove(valorFormulario);
        }
      },
    });
  } */

  private cashMove : CashMove[] = [];

    getCashMoves(): Observable<CashMove[]> {
      return this.httpClient.get<CashMove[]>(`${environment.baseUrl}/caja_diaria`);
    }
    
    createCashMove(payload: CashMove): Observable<CashMove[]> {
      console.log(payload);
      return this.httpClient
      .post<CashMove>(`${environment.baseUrl}/caja_diaria`, payload)
      .pipe(concatMap(() => this.getCashMoves())
        )
    }

    updateCashMove(cashMoveId: number, payload: CashMove): Observable<CashMove[]> {
      return this.httpClient
      .put<CashMove>(`${environment.baseUrl}/caja_diaria/${cashMoveId}`, payload)
        .pipe(concatMap(() => this.getCashMoves())
        )
    }

    deleteCashMove(cashMoveId: number): Observable<CashMove[]> {
      return this.httpClient
      .delete<CashMove>(`${environment.baseUrl}/caja_diaria/${cashMoveId}`)
        .pipe(concatMap(() => this.getCashMoves())
        )
    }
}

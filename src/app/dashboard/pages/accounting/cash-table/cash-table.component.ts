import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { CashMove } from '../models';
import { UserRole } from '../../users/models';

@Component({
  selector: 'app-cash-table',
  templateUrl: './cash-table.component.html',
  styleUrls: ['./cash-table.component.scss']
})
export class CashTableComponent implements OnInit {

  loading = true;

  @Input()
  dataSource: CashMove[] = [];

  @Output()
  deleteCashMove: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editCashMove: EventEmitter<CashMove> = new EventEmitter<CashMove>();

  displayedColumns: string[] = ['id', 'cod_operacion', 'fecha', 'operadora', 'operacion', 'importe', 'cliente', 'tipo_pago', 'ciudad', 'actions'];

  userRole$: Observable< UserRole | undefined>;

  constructor(private router: Router,
              private store: Store
    ){
      this.userRole$ = this.store.select(selectAuthUser)
        .pipe(map((u) => u?.role))
    }
  ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 1200);
  }

  goToDetail(cashMoveID: number): void {
    this.router.navigate(['dashboard', 'cash_move', 'detail', cashMoveID],{
      queryParams:{
        search: 'CashMove'
      }
    });
  }
}
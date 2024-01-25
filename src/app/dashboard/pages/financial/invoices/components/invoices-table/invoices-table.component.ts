import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { UserRole } from 'src/app/dashboard/pages/users/models';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { Invoice } from '../../models';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss']
})
export class InvoicesTableComponent implements OnInit  {
  loading = true;

  @Input()
  dataSource: Invoice[] = [];

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editUser: EventEmitter<Invoice> = new EventEmitter<Invoice>();


  displayedColumns: string[] = ['id', 'cod_factura', 'num_factura', 'fecha_factura', 'cliente', 'importe', 'actions'];

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

goToDetail(userID: number): void {
          this.router.navigate(['dashboard', 'users', 'detail', userID],{
          queryParams:{
          search: 'User'
                      }
          });
        }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { QualityControlEntry } from '../models';
import { UserRole } from '../../../users/models';

@Component({
  selector: 'app-quality-table',
  templateUrl: './quality-table.component.html',
  styleUrls: ['./quality-table.component.scss']
})
export class QualityTableComponent {
  loading = true;

  @Input()
  dataSource: QualityControlEntry[] = [];

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editUser: EventEmitter<QualityControlEntry> = new EventEmitter<QualityControlEntry>();

  displayedColumns: string[] = ['cod_cliente', 'fecha', 'servicio', 'puntaje', 'comentario_cliente', 'analisis_causa', 'acciones', 'responsable_accion', 'actions'];

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

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CustomersService } from '../customers.service';
import { QualityControlEntry } from './models';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent {
  qualityControlName = '';
  qualityControl$: Observable<QualityControlEntry[]>;

  constructor(
    private matDialog : MatDialog,
    private CustomersService : CustomersService,
   /*  private NotifierService : NotifierService */
  ){
    this.qualityControl$ = this.CustomersService.getQualityControlEntrys();
    /* this.UsersService.loadUsers(); */
    /* this.NotifierService.showSuccess('Exito', 'Se Cargaron los usuarios') */
  }
}

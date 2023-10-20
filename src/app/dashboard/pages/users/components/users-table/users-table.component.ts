import { Component, Input } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  displayedColumns: string[] = ['id', 'fullname','email', 'actions'];
}

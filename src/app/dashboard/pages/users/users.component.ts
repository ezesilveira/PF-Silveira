import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
userName = '';


users: User[] = [
  {
    id: 1,
    name: 'Luke',
    lastName: 'Skywalker',
    email: 'luke@example.com',
  },
  {
    id: 2,
    name: 'Leia',
    lastName: 'Organa',
    email: 'leia@example.com',
  },
  {
    id: 3,
    name: 'Obi-Wan',
    lastName: 'Kenobi',
    email: 'obi-wan@example.com',
  }
]

  constructor(
    private matDialog : MatDialog
  ){

  }
  openUsersDialog (): void {
    this.matDialog.open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        console.log('Valor: ', v);
        if (!!v) {
          this.userName = v;
        }
      },
    });
  }
}

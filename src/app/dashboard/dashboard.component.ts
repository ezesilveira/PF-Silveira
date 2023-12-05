import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { User, UserRole } from './pages/users/models';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../store/auth/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  userRole$: Observable< UserRole | undefined>;

  showFiller = false;

  public authUsers$: Observable<User | null>;

  constructor(private authService : AuthService,
              private store: Store,
) {

  this.authUsers$ = this.authService.authUser$;

  this.userRole$ = this.store.select(selectAuthUser)
        .pipe(map((u) => u?.role))

  }

  logout(): void {
    this.authService.logout();
  }
}
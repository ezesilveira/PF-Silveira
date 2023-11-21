import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { User } from './pages/users/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  public authUsers$: Observable<User | null>;

  constructor(private authService : AuthService) {

  this.authUsers$ = this.authService.authUser$;

  }

  logout(): void {
    this.authService.logout();
  }
}
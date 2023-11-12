import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable(); 

  constructor() {}

  login(): Observable<User> {
      const user: User = {
      id: 5,
      email: 'fake@example.com',
      lastName: 'fake',
      name: 'Ovy',
    };

    this._authUser$.next(user);

    return of<User>(user);
  }
  
}

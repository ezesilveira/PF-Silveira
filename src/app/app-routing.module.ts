import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { UserDetailComponent } from './dashboard/pages/users/components/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => 
      import('./dashboard/dashboard.module').then((r) => r.DashboardModule),      
  }, 
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: '**', redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

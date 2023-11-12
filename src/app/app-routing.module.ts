import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { dashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [dashboardGuard],
    loadChildren: () => 
      import('./dashboard/dashboard.module').then((r) => r.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module')
        .then((r) => r.AuthModule),
  },
  {
    path: '**', redirectTo: 'auth/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

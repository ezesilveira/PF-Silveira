import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
            path: '',
            component: DashboardComponent,
            children: [
                { // /dashboard/home
                path: 'home', component: HomeComponent
                },
                {
                path: 'courses',
                loadChildren: () => import('./pages/courses/courses.module')
                    .then((m) => m.CoursesModule)
                },
                {
                path: 'users',
                canActivate: [adminGuard],
                loadChildren: () => import('./pages/users/users.module')
                    .then((m) => m.UsersModule)
                },
                { // /dashboard/enrollments
                path: 'enrollments',
                loadChildren: () => import('./pages/enrollments/enrollments.module')
                    .then((m) => m.EnrollmentsModule)
                },
                {
                path: 'students',
                loadChildren: () => import('./pages/students/students.module')
                    .then((m) => m.StudentsModule)
                },
                {
                path: 'financial',
                loadChildren: () => import('./pages/financial/financial.module')
                    .then((m) => m.FinancialModule)
                },
                {
                path: 'accounting',
                loadChildren: () => import('./pages/accounting/accounting.module')
                    .then((m) => m.AccountingModule)
                },
                {
                path: 'customers',
                loadChildren: () => import('./pages/customers/customers.module')
                    .then((m) => m.CustomersModule)
                },
                {
                path: '**', redirectTo: 'home',
                },
            ]
            },
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
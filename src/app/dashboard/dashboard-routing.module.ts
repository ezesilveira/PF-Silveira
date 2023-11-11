import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/components/user-detail/user-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/courses/components/course-detail/course-detail.component';
import { DashboardComponent } from './dashboard.component';

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
                { // /dashboard/users
                path: 'users', component: UsersComponent,
                },
                {
                path: 'users/detail/:id',
                component: UserDetailComponent,
                },
                {
                path: 'courses', component: CoursesComponent
                },
                {
                path: 'courses/:id', component: CourseDetailComponent
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
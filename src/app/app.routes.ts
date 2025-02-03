import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },

];

  // lazy loading
  // {path: 'users',
  //     loadChildren: () => import('./users/users.routes').then(m => m.userRoutes) }
  /*
    import { Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

export const userRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserDetailComponent }
];
     */

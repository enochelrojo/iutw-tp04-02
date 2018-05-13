import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
{
    path: 'users-list', 
    component: UserslistComponent
}, 
{
    path: '', 
    redirectTo: '/users-list', 
    pathMatch: 'full'
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
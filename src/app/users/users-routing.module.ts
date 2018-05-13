import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent }   from './userslist/userslist.component';
import { UserdetailComponent }  from './userdetail/userdetail.component';

const routes: Routes = [
{
    path: 'users-list', 
    component: UserslistComponent
}, 
{
    path: '', 
    redirectTo: '/users-list', 
    pathMatch: 'full'
},
{
    path: 'user-detail/:id', 
    component: UserdetailComponent
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
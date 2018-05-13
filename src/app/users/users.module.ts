import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule
  ],
  declarations: [
    UserslistComponent,
    UserdetailComponent
  ],
  exports: [
    UserslistComponent,
    UserdetailComponent
  ]
})

export class UsersModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { UserslistComponent } from './userslist/userslist.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule
  ],
  declarations: [
    UserslistComponent
  ],
  exports: [
    UserslistComponent
  ]
})

export class UsersModule { }
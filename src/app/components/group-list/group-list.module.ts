import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupListRoutingModule } from './group-list-routing.module';

import { GroupRoutingModule } from './group-list-routing.module';
import { GroupListComponent } from './group-list/group-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupRoutingModule
  ],
  declarations: [GroupListComponent]
})
export class GroupListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoDosPageRoutingModule } from './grupo-dos-routing.module';

import { GrupoDosPage } from './grupo-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupoDosPageRoutingModule
  ],
  declarations: [GrupoDosPage]
})
export class GrupoDosPageModule {}

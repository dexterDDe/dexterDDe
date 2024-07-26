import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoUnoPageRoutingModule } from './grupo-uno-routing.module';

import { GrupoUnoPage } from './grupo-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupoUnoPageRoutingModule
  ],
  declarations: [GrupoUnoPage]
})
export class GrupoUnoPageModule {}

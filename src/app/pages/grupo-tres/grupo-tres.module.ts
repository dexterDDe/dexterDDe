import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoTresPageRoutingModule } from './grupo-tres-routing.module';

import { GrupoTresPage } from './grupo-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupoTresPageRoutingModule
  ],
  declarations: [GrupoTresPage]
})
export class GrupoTresPageModule {}

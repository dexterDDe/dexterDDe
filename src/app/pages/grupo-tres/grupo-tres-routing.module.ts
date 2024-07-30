import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoTresPage } from './grupo-tres.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoTresPageRoutingModule {}

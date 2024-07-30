import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoUnoPage } from './grupo-uno.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoUnoPageRoutingModule {}

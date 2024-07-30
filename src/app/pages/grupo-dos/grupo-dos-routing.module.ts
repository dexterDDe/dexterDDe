import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoDosPage } from './grupo-dos.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoDosPageRoutingModule {}

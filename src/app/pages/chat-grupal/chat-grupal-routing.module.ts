import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGrupalPage } from './chat-grupal.page';

const routes: Routes = [
  {
    path: '',
    component: ChatGrupalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatGrupalPageRoutingModule {}

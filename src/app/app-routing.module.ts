import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatGrupalPage } from './pages/chat-grupal/chat-grupal.page'; // Asegúrate de importar tu página de chat
import { UserListComponent } from './components/user-list/user-list.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./pages/noticia/noticia.module').then(m => m.NoticiaPageModule)
  },
  {
    path: 'chat-grupal', component: ChatGrupalPage
  },
  {
    path: 'groups', component: GroupListComponent,
    loadChildren: () => import('./components/group-list/group-list.module').then(m => m.GroupModule)
  },
  {
    path: 'users', component: UserListComponent,
    loadChildren: () => import('./components/user-list/user-list.module').then(m => m.UserModule)
  },
  {
    path: 'group-chat/:groupId', component: GroupChatComponent,
    loadChildren: () => import('./components/group-chat/group-chat.module').then(m => m.GroupChatModule)
   },
  {
    path: 'private-chat/:receiverId', component: PrivateChatComponent,
    loadChildren: () => import('./components/private-chat/private-chat.module').then(m => m.PrivateChatModule)
   }
/*
  {
    path: 'grupo-uno',
    loadChildren: () => import('./pages/grupo-uno/grupo-uno.module').then( m => m.GrupoUnoPageModule)
  }
*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


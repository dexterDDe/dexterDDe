import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatGrupalPage } from './pages/chat-grupal/chat-grupal.page'; // Asegúrate de importar tu página de chat

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
  { path: 'chat-grupal', component: ChatGrupalPage },
  {
    path: 'grupo-uno',
    loadChildren: () => import('./pages/grupo-uno/grupo-uno.module').then( m => m.GrupoUnoPageModule)
  },
  {
    path: 'grupo-dos',
    loadChildren: () => import('./pages/grupo-dos/grupo-dos.module').then( m => m.GrupoDosPageModule)
  },  
  {
    path: 'grupo-tres',
    loadChildren: () => import('./pages/grupo-tres/grupo-tres.module').then( m => m.GrupoTresPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


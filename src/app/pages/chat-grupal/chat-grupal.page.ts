import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-grupal',
  templateUrl: './chat-grupal.page.html',
  styleUrls: ['./chat-grupal.page.scss'],
})
export class ChatGrupalPage implements OnInit {
  groups: any[] = []; // Array para almacenar los grupos
  constructor(private router: Router, private chatService: ChatService) {}

  ngOnInit() {
  }

  irNoticias() {
    this.router.navigate(['/noticia']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }

  irGrupoUno() {
    this.router.navigate(['/grupo-uno']);
  }
  irGrupoDos() {
    this.router.navigate(['/grupo-dos']);
  }
  irGrupoTres() {
    this.router.navigate(['/grupo-tres']);
  }
}

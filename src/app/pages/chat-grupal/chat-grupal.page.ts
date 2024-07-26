import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { ChatService } from '../../services/chat.service'; 
@Component({
  selector: 'app-chat-grupal',
  templateUrl: './chat-grupal.page.html',
  styleUrls: ['./chat-grupal.page.scss'],
})
export class ChatGrupalPage implements OnInit {
  groupMembers: any[] = []; // Array para almacenar los miembros del grupo

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.loadGroupMembers();
  }

  // Función para cargar los miembros del grupo
  loadGroupMembers() {
    this.chatService.getGroupMembers().subscribe(
      data => {
        this.groupMembers = data; // Almacena los datos en el array
        console.log(this.groupMembers); // Opcional: Verifica los datos en la consola
      },
      error => {
        console.error('Error al obtener los miembros del grupo', error);
      }
    );
  }
  // Función para navegar a la página de noticias
  irNoticias() {
    this.router.navigate(['/noticia']);
  }
  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}


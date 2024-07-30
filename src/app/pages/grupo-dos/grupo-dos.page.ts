import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-grupo-dos',
  templateUrl: './grupo-dos.page.html',
  styleUrls: ['./grupo-dos.page.scss'],
})
export class GrupoDosPage implements OnInit {
  groupMessages: any[] = []; // Array para almacenar los mensajes del grupo
  groupId: string = '2'; // Asume un ID de grupo para el ejemplo
  newMessage: string = ''; // Variable para el nuevo mensaje
    currentUser: { id: number, name: string } = { id: 1, name: 'User1' }; // Usuario actual

  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.loadGroupMessages();
  }

  // Carga los mensajes del grupo desde el servicio
  loadGroupMessages() {
    this.chatService.getGroupMessagesByGroup(this.groupId).subscribe(
      data => {
        this.groupMessages = data;
        console.log(this.groupMessages); // Opcional: Verifica los datos en la consola
      },
      error => {
        console.error('Error al obtener los mensajes del grupo', error);
      }
    );
  }

  // Enviar un mensaje al grupo
  sendMessage() {
    const message = {
      sender_id: this.currentUser.id, // ID del remitente basado en el usuario actual
      group_id: parseInt(this.groupId, 10),
      content: this.newMessage
    };

    this.chatService.sendMessageToGroup(message).subscribe(
      response => {
        console.log('Mensaje enviado', response);
        this.newMessage = ''; // Limpiar el campo de mensaje
        this.loadGroupMessages(); // Recargar mensajes para mostrar el nuevo mensaje
      },
      error => {
        console.error('Error al enviar el mensaje', error);
      }
    );
  }

  volverChatGrupal() {
    this.router.navigate(['/chat-grupal']);
  }
}

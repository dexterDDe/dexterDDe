import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent implements OnInit {

  messages: any[] = [];
  senderId: number = 1; // Cambia esto al ID del usuario actual
  receiverId: number = 2; // Cambia esto al ID del destinatario
  newMessage: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getPrivateMessages(this.senderId, this.receiverId).subscribe(data => {
      this.messages = data;
    });
  }

  sendMessage() {
    const message = {
      sender_id: this.senderId,
      receiver_id: this.receiverId,
      content: this.newMessage
    };

    this.chatService.sendPrivateMessage(message).subscribe(response => {
      this.messages.push(response);
      this.newMessage = '';
    });
  }

}

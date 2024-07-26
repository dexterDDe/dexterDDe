import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {

  messages: any[] = [];
  groupId: number = 1; // Cambia esto al ID del grupo actual
  newMessage: string = '';
  userId: number = 1; // Cambia esto al ID del usuario actual

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getGroupMessages(this.groupId).subscribe(data => {
      this.messages = data;
    });
  }

  sendMessage() {
    const message = {
      sender_id: this.userId,
      group_id: this.groupId,
      content: this.newMessage
    };

    this.chatService.sendGroupMessage(message).subscribe(response => {
      this.messages.push(response);
      this.newMessage = '';
    });
  }

}
